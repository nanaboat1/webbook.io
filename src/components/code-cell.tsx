
import  CodeEditor  from './code-editor';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import Preview from './preview';
import { useState } from "react";
import bundle from '../bundler';
import Resizable from './resizable';
import { useEffect } from 'react';


const Codecell = () => { 
    const [code, setCode] = useState('');
    const [input, setInput] = useState('');
    const [err, setErr] = useState('');

    useEffect(()=> {
      const timer = setTimeout( async () => { 
        const output = await bundle(input);
        setCode(output.code);
        setErr(output.err);
      },750); 

      return () => {
        clearTimeout(timer);
      }

    },[input]);
  
 
    // Contents of the Webpage.
    return <Resizable direction="vertical"> 
    <div style={{height: '100%', display: 'flex', flexDirection: 'row'}}>
      <Resizable direction="horizontal"> 
      <CodeEditor
        initialValue="const a = 1;"
        onChange={(value) => setInput(value)}
      />
      </Resizable>
      <Preview code={code} bundlingStatus={err} />
    </div>
    </Resizable>
}; 


export default Codecell;
