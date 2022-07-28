
import ReactDOM from "react-dom";
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import Codecell from "./components/code-cell";
import TextEditor from "./components/text-editor";

const App = () => { 
   
    return ( 

        // Display a Code Cell Component
        <div>
            <TextEditor />
        </div>

    );


}; 


ReactDOM.render(<App />, document.querySelector('#root'));