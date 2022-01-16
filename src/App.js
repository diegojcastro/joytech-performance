import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
function App() {
  const [activeTab, setActiveTab] = useState('Editor');

  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab}/>
      <p>Hello</p>
    </div>
  );
}

export default App;
