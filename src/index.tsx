
import ReactDOM from "react-dom";
import  CodeEditor  from './components/code-editor';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import Preview from './components/preview';
import bundle from './bundler';
import { useState } from "react";


const App = () => { 
    const [code, setCode] = useState('');
    const [input, setInput] = useState('');
  
    const onClick = async () => {
      const output = await bundle(input);
      setCode(output);
    };


    
    
    // Contents of the Webpage.
    return <div>
      <CodeEditor
        initialValue="const a = 1;"
        onChange={(value) => setInput(value)}
      />
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
}; 


ReactDOM.render(<App />, document.querySelector('#root'));