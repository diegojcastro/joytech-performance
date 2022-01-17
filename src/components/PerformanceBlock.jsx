import { useEffect, useState } from 'react';
import PerformanceLine from './PerformanceLine';
import './PerformanceBlock.css';


export default function PerformanceBlock(props) {
  const {index, type, lineData, performanceLines, setPerformanceLines} = props;
  const [lineType, setLineType] = useState(type);
  const [blockLines, setBlockLines] = useState([]);

  const lineTypeOptions = [
    'Illusion',
    'Command',
  ]

  const addBlockLine = () => {
    const oldLines = [];
    for (const line of blockLines) {
      oldLines.push({...line});
    };
    oldLines.push(<PerformanceLine key={oldLines.length} color='#aabbcc' text=''/>);
    setBlockLines(oldLines);
  }

  const changeLineType = (typeOptionsIndex) => {
    setLineType(lineTypeOptions[typeOptionsIndex]);
  }

  useEffect(() => {
    const newPerfLines = performanceLines.map(line => {
      return {...line};
    })
    newPerfLines[index].type = lineType;
    setPerformanceLines(newPerfLines);
  }, [lineType])


  return (
    <div className='card'>
      <div className='card-body performance-block'>
        <div className="btn-group">
          <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {lineType}
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item" onClick={() => {changeLineType(0)}}>{lineTypeOptions[0]}</li>
            <li className="dropdown-item" onClick={() => {changeLineType(1)}}>{lineTypeOptions[1]}</li>
          </ul>
        </div>

        {lineType === lineTypeOptions[0] && (
          <div className='performance-text-block'>
            {blockLines}
            <button type="button" className="btn btn-success add-perf-text-button" onClick={addBlockLine}>Add Line to Block</button>
          </div>
          )}
        {lineType === lineTypeOptions[1] && <input placeholder='Execute direct game command'></input>}
        
        
        <div className="btn-group">
          <button className="btn btn-danger btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Delete Block
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item">Delete This Block</li>
          </ul>
        </div>
      </div>
    </div>
  )
}