import { useEffect, useState } from "react"
import PerformanceBlock from "./PerformanceBlock";
import './Editor.css'


export default function Editor(props) {

  const {performanceLines, setPerformanceLines} = props;

  const addLine = () => {
    const oldLines = performanceLines.map( line => {
      return {...line};
    });

    setPerformanceLines([...oldLines, {type: 'Illusion', blockData: []}]);
    console.log('lines are now:',performanceLines);
  }

  const parsedLines = performanceLines.map( (line, index) => {
    return (
      <PerformanceBlock key={index} index={index} type={line.type} blockData={line.blockData} performanceLines={performanceLines} setPerformanceLines={setPerformanceLines}/>
    )
  })

  useEffect(() => {
    console.log('Performance lines are now:', performanceLines)
  }, [performanceLines])

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