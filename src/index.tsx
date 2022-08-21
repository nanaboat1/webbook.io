import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { Provider } from "react-redux";
import { store } from './state';
import CellList from "./components/cell-list";

// testing react 18. 
import { createRoot } from 'react-dom/client';

const App = () => { 
   
    return ( 

        // display cell list
        <Provider store={store}> 
            <CellList /> 
        </Provider>

    );


}; 

// new react 18 api
const container = document.getElementById('root');
const root = createRoot(container!); 
root.render(<App />);



