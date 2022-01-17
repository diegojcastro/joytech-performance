import { useState } from "react"
import PerformanceBlock from "./PerformanceBlock";
import './Editor.css'


export default function Editor(props) {

  const {performanceLines, setPerformanceLines} = props;

  const addLine = () => {
    setPerformanceLines([...performanceLines, {type: 'performance', color: '#aabbcc', text: 'Write something awesome'}]);
    console.log('lines are now:',performanceLines);
  }

  const parsedLines = performanceLines.map( (line, index) => {
    return (
      <PerformanceBlock key={index} index={index} lineData={line} setPerformanceLines={setPerformanceLines}/>
    )
  })

  return (
    <div className="editor-root">
      <h1>Write your performance here!</h1>

      <div className="parsed-lines-container" >
        {parsedLines}
      </div>

      <br /> 

      <button type="button" className="btn btn-primary" onClick={addLine}>Add Block</button>
    </div>
  )
}