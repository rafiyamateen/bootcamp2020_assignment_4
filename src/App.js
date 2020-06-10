import React, { useState } from 'react';
import { Counter } from './Counter.js';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  let [darkMode, setMode] = useState(true);
  return (
    <div className={`counter ${darkMode ? 'dark' : ''}`}>
      <h1>{darkMode ? 'Dark' : 'Light'} Mode</h1>
      <button onClick={()=>setMode(!darkMode)}>Change mode</button>
    <Counter value={count} />
    <button onClick={() => setCount(--count)}>Decrease</button>
    <button onClick={() => setCount(++count)}>Increase</button>
    </div >
  );
}

export default App;
