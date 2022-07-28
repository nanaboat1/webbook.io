
import ReactDOM from "react-dom";
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import Codecell from "./components/code-cell";

const App = () => { 
   
    return ( 

        // Display a Code Cell Component
        <div>
            <Codecell />
        </div> 

    );


}; 


ReactDOM.render(<App />, document.querySelector('#root'));