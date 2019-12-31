import React from 'react';
import './App.css';
import Topbar from './components/Topbar';
import Report from './components/Report';
import Detailed from './components/Detailed';

function App() {
  return (
    <div>
        <Topbar />
        <Report />
        <Detailed />
    </div>
  );
}

export default App;
