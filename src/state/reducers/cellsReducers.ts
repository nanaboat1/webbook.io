import { ActionType } from "../action-types";
import { Action } from "../actions"; 
import {Cell} from '../cell';
import produce from 'immer';


// Describe structure of Cell Reducer
interface CellState { 
    loading: boolean; 
    error: string | null;
    order: string[];
    data: { 
        [key: string]: Cell
    }

}

const initialState: CellState = { 
    loading: false,
    error: null,
    order: [],
    data: {},
};

const reducer = produce((
    state: CellState = initialState, // an array that stores all the cell objects currently on screen.
    action: Action // new update for a particular cell
    ) : CellState | void => { 
        
        switch(action.type) {
            case ActionType.UPDATE_CELL:
                const { id, content } = action.payload; 
                state.data[id].content = content; 

                return;
            case ActionType.DELETE_CELL:

                // delete object from data of objs of cell obj
                delete state.data[action.payload]; 

                // remove id of deleted cell
                state.order = state.order.filter(id => id !== action.payload);

                return; 
                
            case ActionType.MOVE_CELL:
                const { direction } = action.payload; 

                // find index of cell to be moved.
                const index = state.order.findIndex((id) =>  id === action.payload.id);
                
                // based on chosen direction destination index is calculated. 
                const targetIndex = direction === 'up' ? index -1 : index + 1; 

                // invalid index.
                if (targetIndex < 0 || targetIndex > state.order.length -1) { return; } 

                state.order[index] = state.order[targetIndex]; 
                state.order[targetIndex] = action.payload.id; 

                return; 
            case ActionType.INSERT_CELL_BEFORE:

                const cell : Cell = { 
                    content : '',
                    type: action.payload.type,
                    id: randomID()
                };

                state.data[cell.id] = cell; 

                const foundIndex = state.order.findIndex( id => id === action.payload.id); 

                if ( foundIndex < 0) { 
                    state.order.push(cell.id);
                } else {
                    state.order.splice(foundIndex, 0, cell.id);
                }

                return; 
            default:

                return state; /* default state returns initialState  */
        }

}, initialState);

const randomID = () => { 
    return Math.random().toString(36).substring(2,5); 
}

export default reducer; 