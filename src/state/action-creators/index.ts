import { Dispatch } from "react";
import { ActionType } from "../action-types";
import { UpdateCellAction, DeleteCellAction, InsertCellAfterAction, MoveCellAction, Direction, Action} from "../actions";
import { CellTypes } from "../cell"; 
import bundle from "../../bundler";

// update
export const updateCell = (
    id: string, 
    content: string, 
)
: UpdateCellAction => {
    return {
        type: ActionType.UPDATE_CELL, 
        payload: {
            id,
            content, 
        },
    };
};

// delete
export const deleteCell = (

    id: string
): 
    DeleteCellAction => { 
        
        return {
            type: ActionType.DELETE_CELL,
            payload: id,
        };

    };

// movecell
export const moveCell = (
    id: string,
    direction: Direction,

): MoveCellAction  => {

    return {
        type: ActionType.MOVE_CELL, 
        payload: {
            id,
            direction,
        }
    };

};

// insert cell before
export const insertCellAfter  = (
    id: string | null, 
    cellType: CellTypes 
    ): InsertCellAfterAction  => {

        return {
            type: ActionType.INSERT_CELL_AFTER,
            payload: {
                id,
                type: cellType,
            }
        };
    }; 

export const createBundle = (cellId: string, input: string) => { 

    return async (dispatch: Dispatch<Action>) => { 
        dispatch({ 
            type: ActionType.BUNDLE_START, 
            payload: {
                cellId, 

            }
        }); 

        const result = await bundle(input); // output from bundling process. 


        dispatch({
            type: ActionType.BUNDLE_COMPLETE, 
            payload: {
                cellId, 
                bundle: result,
            }
        });
    }
}