import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const SecondsCounter = ({ initialSeconds, alertAt }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    if (seconds === alertAt) {
      alert(`You've reached ${alertAt} seconds.`);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, alertAt]);

  const reset = () => {
    setSeconds(0);
    setIsActive(true);
  };

  const stop = () => {
    setIsActive(false);
  };

  const resume = () => {
    setIsActive(true);
  };

  const countdown = () => {
    setIsActive(true);
    setSeconds(initialSeconds);
  };

  return (
    <div>
      <FontAwesomeIcon icon={faClock} />{' '}
      {seconds}
      <div>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
        <button onClick={resume}>Resume</button>
        <button onClick={countdown}>Countdown</button>
      </div>
    </div>
  );
};

// Render the SecondsCounter into the app.
ReactDOM.render(
  <SecondsCounter initialSeconds={0} alertAt={10} />,
  document.getElementById('app')
);

export default SecondsCounter;
