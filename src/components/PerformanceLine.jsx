import './PerformanceLine.css';

export default function PerformanceLine(props) {

  return (
    <div className='performance-line'>
      <div className="btn-group">
        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Type
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-item">Illusion</li>
          <li className="dropdown-item">Command</li>
        </ul>
      </div>

      <div className="btn-group">
        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Color
        </button>
        <ul className="dropdown-menu">
          ...
        </ul>
      </div>

      <p>I'll put an input field here</p>
      
      <div className="btn-group">
        <button className="btn btn-danger btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          🗑
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-item">Delete This Line</li>
        </ul>
      </div>
    </div>
  )
}