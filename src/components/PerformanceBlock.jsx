import { useState } from 'react';
import PerformanceLine from './PerformanceLine';
import './PerformanceBlock.css';


export default function PerformanceBlock(props) {
  const {index, lineData, setPerformanceLines} = props;
  const [lineType, setLineType] = useState('Illusion');
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


  return (
    <div className='card'>
      <div className='card-body performance-block'>
        <div className="btn-group">
          <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {lineType}
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item" onClick={() => {setLineType(lineTypeOptions[0])}}>{lineTypeOptions[0]}</li>
            <li className="dropdown-item" onClick={() => {setLineType(lineTypeOptions[1])}}>{lineTypeOptions[1]}</li>
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