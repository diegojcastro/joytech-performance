import { useEffect, useState } from "react";


export default function PerformanceLine(props) {
  const { color, text } = props;
  const [lineText, setLineText] = useState('');

  useEffect(() => {
    setLineText(text);
  },[])


  return (
    <>
      <div className='color-and-text'>
        <div className="btn-group">
          <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {color}
          </button>
          <ul className="dropdown-menu">
            ...
          </ul>
        </div>
        <input 
          placeholder='Write your performance here' 
          value={lineText} 
          onChange={(e) => setLineText(e.target.value)}
          style={{width: '100%'}}
        />
        <div className="btn-group">
          <button className="btn btn-light btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            ❌
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item">Delete This Line</li>
          </ul>
        </div>
      </div>
    </>
  )
};