
import ReactDOM from "react-dom";
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import Codecell from "./components/code-cell";
import TextEditor from "./components/text-editor"; 
import { Provider } from "react-redux";
import { store } from './state';

const App = () => { 
   
    return ( 

        // Display a Code Cell Component
        <Provider store={store}> 
        <div>
            <Codecell /> 
        </div> 
        </Provider>

    );


}; 


ReactDOM.render( <Provider store={store}> <App /> </ Provider>, document.querySelector('#root'));

