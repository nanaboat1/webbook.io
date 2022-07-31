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
    ): CellState | void => { 
        
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

                return state; 

            case ActionType.INSERT_CELL_BEFORE:
                return state; 
            default:
                return; 
        }

});

export default reducer; 