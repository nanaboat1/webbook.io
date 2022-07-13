import MonacoEditor, { OnMount } from '@monaco-editor/react'; 
import './code-editor.css';


interface CodeEditorProps { 
    initialValue: string;
}


const CodeEditor: React.FC<CodeEditorProps> = ({initialValue}) => { 

    
    const onFormatClick= () => { 
        // Feature Deprecated

    }

    return (
    <div className="editor-wrapper">
        <button className="button button-format isprimary is-small"
         onClick={onFormatClick}>Format</button>
    <MonacoEditor 
    value= {initialValue}
    theme="vs-dark" 
    language="javascript"  
    height="500px"
    options={{
        wordWrap: 'on', 
        minimap : { enabled: false },
        showUnused : false, // for making sure unused import statements are still used. 
        folding: false, 
        lineNumbersMinChars: 3,
        fontSize: 16, 
        scrollBeyondLastLine: false,
        automaticLayout: true, 
    }}
    /></div>);
}; 

export default CodeEditor; 