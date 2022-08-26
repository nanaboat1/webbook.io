import { ActionType } from "../action-types";
import { UpdateCellAction, DeleteCellAction, InsertCellBeforeAction, MoveCellAction, Direction } from "../actions";
import { CellTypes } from "../cell";

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
export const insertCellBefore  = (
    id: string | null, 
    cellType: CellTypes 
    ): InsertCellBeforeAction  => {

        return {
            type: ActionType.INSERT_CELL_BEFORE,
            payload: {
                id,
                type: cellType,
            }
        };
    }; 

