import { useState } from 'react';
import './PerformanceLine.css';

export default function PerformanceLine(props) {
  const {index, lineData, setPerformanceLines} = props;
  const [lineType, setLineType] = useState('Illusion');
  const [color, setColor] = useState('#aabbcc');

  const lineTypeOptions = [
    'Illusion',
    'Command',
  ]


  return (
    <div className='card'>
      <div className='card-body performance-line'>
        <div className="btn-group">
          <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {lineType}
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item" onClick={() => {setLineType(lineTypeOptions[0])}}>{lineTypeOptions[0]}</li>
            <li className="dropdown-item" onClick={() => {setLineType(lineTypeOptions[1])}}>{lineTypeOptions[1]}</li>
          </ul>
        </div>

        <div className="btn-group">
          <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {color}
          </button>
          <ul className="dropdown-menu">
            ...
          </ul>
        </div>

        {lineType === lineTypeOptions[0] && <input placeholder='Write your performance here'></input>}
        {lineType === lineTypeOptions[1] && <input placeholder='Execute direct game command'></input>}
        
        <div className="btn-group">
          <button className="btn btn-danger btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            🗑
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item">Delete This Line</li>
          </ul>
        </div>
      </div>
    </div>
  )
}