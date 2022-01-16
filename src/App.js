import { useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import Navbar from './components/Navbar';
function App() {
  const [activeTab, setActiveTab] = useState('Editor');
  const [performanceLines, setPerformanceLines] = useState([]);

  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab}/>
      {activeTab === 'Editor' && <Editor performanceLines={performanceLines} setPerformanceLines={setPerformanceLines}/>}
    </div>
  );
}

export default App;
