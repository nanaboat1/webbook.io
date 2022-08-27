import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { ActionType } from './action-types';


export const store = createStore(reducers,{}, applyMiddleware(thunk));

// for testing 
store.dispatch( {
    type: ActionType.INSERT_CELL_AFTER,
    payload : { 
        id: "asd", 
        type: 'code',
    }
}); 

store.dispatch( { 
    type: ActionType.INSERT_CELL_AFTER, 
    payload: {
        id: 'dff', 
        type: 'code'
    }
});