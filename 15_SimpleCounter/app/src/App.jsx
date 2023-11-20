import React, { useState } from 'react';
import './App.css';
import SecondsCounter from './SecondsCounter';
import { useTimer } from './TimerLogic';

function App() {
  const {
    secondsElapsed,
    alertTime,
    setAlertTime,
    startTimer,
    stopTimer,
    resetTimer,
    resumeTimer
  } = useTimer();

  const handleChange = (event) => {
    setAlertTime(Number(event.target.value));
  };

  return (
    <div className="App">
      <header className="App-header">
        <SecondsCounter seconds={secondsElapsed} />
        <input
          className="input-alert-time"
          type="number"
          value={alertTime || ''}
          onChange={handleChange}
          placeholder="Set alert time"
        />
        <div>
          <button className="button" onClick={startTimer}>Start</button>
          <button className="button" onClick={stopTimer}>Stop</button>
          <button className="button" onClick={resetTimer}>Reset</button>
          <button className="button" onClick={resumeTimer}>Resume</button>
        </div>
        <p className="description-text">This is a simple seconds counter app.</p>
      </header>
    </div>
  );
}
export default App;
