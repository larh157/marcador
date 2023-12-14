

// import parse from 'html-react-parser'
import { useState } from "react";
import React from 'react'
import "./App.css";
// import { marked } from "marked";
import Previewer from "./previo";
// import { preview } from "vite";





function App() {
  const string =
    `
   # Welcome to my React Markdown Previewer!

   ## This is a sub-heading

   [links](https://www.freecodecamp.org)

   \`console.log('lmao')\`

   \`\`\`
   function add(a, b) {
     return a + b;
   }
   \`\`\`

   1. Lemon
   2. Apple
   3. Android

   > Block Quote wow

   ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

   **F- you**
 `

  const [text, setText] = useState(string)
  // const [etiqueta, setEtiqueta] = useState();

  function handleChange(e) {
    setText(e.target.value);
  };


  return (

    <>
      <textarea id="editor"
        value={text}
        onChange={handleChange}
      />
    
      <Previewer text={text} id={"preview"}/>

 


  

    </>

  )
}

export default App