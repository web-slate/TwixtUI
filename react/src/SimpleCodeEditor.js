import React from 'react'
//import CodeMirror from '@uiw/react-codemirror';

export default function SimpleCodeEditor({ height = '200px', extensions = [], value = '', onChange = () =>{} }) {
  
  return (
    <CodeMirror 
    height={height}
    extensions={extensions} 
    value={value} 
    onChange={onChange}
    />
  );
}