import React, { useState } from 'react';
import { Counter } from './Counter.js';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  let [darkMode, setMode] = useState(true);
  return (
    <div className={`counter ${darkMode ? 'dark' : ''}`}>
      <h1>{darkMode ? 'Dark' : 'Light'} Mode</h1>
      <button className={`${darkMode ? 'dark-btn' : ''}`} onClick={()=>setMode(!darkMode)}>Change mode</button>
    <Counter value={count} />
    <button className={`${darkMode ? 'dark-btn' : ''}`} onClick={() => setCount(--count)}>Decrease</button>
    <button className={`${darkMode ? 'dark-btn' : ''}`} onClick={() => setCount(++count)}>Increase</button>
    </div >
  );
}

export default App;
