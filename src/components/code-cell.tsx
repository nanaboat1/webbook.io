
import  CodeEditor  from './code-editor';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import Preview from './preview';
import { useState } from "react";
import bundle from '../bundler';
import Resizable from './resizable';
import { useEffect } from 'react';
import { Cell } from '../state';
import { useActions } from '../hooks/use-actions';

interface CodecellProps { 
  cell: Cell; 
}


const Codecell: React.FC<CodecellProps> = ({ cell }: CodecellProps) => { 
    const [code, setCode] = useState('');
    const [err, setErr] = useState('');

    const { updateCell }= useActions(); 

    useEffect(()=> {
      const timer = setTimeout( async () => { 
        const output = await bundle(cell.content);
        setCode(output.code);
        setErr(output.err);
      },750); 

      return () => {
        clearTimeout(timer);
      }

    },[cell.content]);
  
 
    // Contents of the Webpage.
    return <Resizable direction="vertical"> 
    <div style={{height: 'calc(100%-10px)', display: 'flex', flexDirection: 'row'}}>
      <Resizable direction="horizontal"> 
      <CodeEditor
        initialValue={cell.content}
        onChange={(value) => updateCell(cell.id, value)}
      />
      </Resizable>
      <Preview code={code} bundlingStatus={err} />
    </div>
    </Resizable>
}; 


export default Codecell;
