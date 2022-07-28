
import  CodeEditor  from './code-editor';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import Preview from './preview';
import { useState } from "react";
import bundle from '../bundler';


const Codecell = () => { 
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


export default Codecell;