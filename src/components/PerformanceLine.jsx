import './PerformanceLine.css';

export default function PerformanceLine(props) {

  return (
    <div className='performance-line'>
      <div className="btn-group">
        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Type
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-item">A</li>
          <li className="dropdown-item">B</li>
        </ul>
      </div>

      <div className="btn-group">
        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Small button
        </button>
        <ul className="dropdown-menu">
          ...
        </ul>
      </div>
    </div>
  )
}