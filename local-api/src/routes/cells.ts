import express from 'express'; 
import fs from 'fs/promises'; 
import path from 'path';

interface LocalApiError { 
    code: string; 
}

interface Cell { 
    id: string; 
    content: string; 
    type: 'text' | 'string'; 
}

export const createCellsRouter = (filename: string, dirname: string ) => { 

    const router = express.Router(); 
    router.use(express.json());

    const fullPath = path.join(dirname, filename); 

    const isLocalApiError = ( err: any): err is LocalApiError => { 
        return typeof err.code === 'string'; 
    };

    router.get('/cells', async (req, res) => { 

        try {
            // read file
            const result = await fs.readFile(fullPath, { encoding: 'utf-8'});

            res.send(JSON.parse(result)); 

        } catch (err: any) {
            if (isLocalApiError(err)) { 
                if ( err.code === 'ENOENT') { 
                    await fs.writeFile(fullPath, '[]', {encoding: 'utf-8'}); 
                } else { 
                    throw err; 
                }
            }
        }

        // read file, parse then dispatch back to browser. 

    }); 

    router.post('/cells', async (req, res) => { 

        // ensure the file exists, else create it
        const { cells } : { cells: Cell[] }= req.body; 


        try { 
            // take the list of cells from the req obj and serialize it. 
            await fs.writeFile(fullPath, JSON.stringify(cells), 'utf-8'); 

        } catch ( err: any) {
            if (isLocalApiError(err)) {
                if (err.code === 'ENOENT') { 
                    await fs.writeFile(fullPath, '[]', 'utf-8'); 
                    res.send([])
                }
            }
        } 

        res.send({ status: 'ok'}); 
    }); 

    return router; 
};