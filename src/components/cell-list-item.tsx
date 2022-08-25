import { Cell } from '../state'; 
import Codecell from './code-cell';
//import TextEditor from './text-editor';

interface CellListItemProps { 
    cell: Cell;
}

// individual cells dispatched from store to render
const CellListItem: React.FC<CellListItemProps> = ({ cell }) => { 

    let child: JSX.Element | undefined ; 

    // text editor feature removed due sourcemap error caused by bug in react 5.0.1
    // will follow-up when issue is fixed on new react update. 
    if (cell.type === 'code') {
        child = <Codecell />;
    } 
    
    return <div> {child}</div>; 
}

export default CellListItem; 