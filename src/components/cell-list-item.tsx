import { Cell } from '../state'; 
import Codecell from './code-cell';
import TextEditor from './text-editor';

interface CellListItemProps { 
    cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => { 

    let child: JSX.Element; 
    if (cell.type === 'code') {
        child = <Codecell />;
    } else { 
        child = <TextEditor />;
    }
    
    return <div> {child}</div>; 
}

export default CellListItem; 