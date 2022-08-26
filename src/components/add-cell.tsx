import './add-cell.css';
import { useActions } from '../hooks/use-actions';


interface AddCellProps {
    nextCellId: string | null; 
    forceVisible?: boolean; // question mark makes it optional prop component. 

}


const AddCell: React.FC<AddCellProps> = ({ nextCellId, forceVisible}: AddCellProps) => { 

    const { insertCellBefore } = useActions(); 



    return (<div className={`add-cell ${forceVisible && 'force-visible'}`}> 

        <div className="add-buttons"> 
        <button className="button is-rounded is-primary is-small" onClick={() => insertCellBefore(nextCellId,'code')}> 
            <span>
                <i className="fas fa-plus " />
            </span>
            <span> Code</span>
        </button>
        <div className="divider"> </div>
        </div>
    </ div>    
    );
};

export default AddCell; 

// use this feature when source map issue is resolved
//<button onClick={() => insertCellBefore(nextCellId,'text')}> Text </button>