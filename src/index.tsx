
import ReactDOM from "react-dom";
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { Provider } from "react-redux";
import { store } from './state';
import CellList from "./components/cell-list";

const App = () => { 
   
    return ( 

        // Display Cell List
        <Provider store={store}> 
            <CellList /> 
        </Provider>

    );


}; 


ReactDOM.render( <Provider store={store}> <App /> </ Provider>, document.querySelector('#root'));

