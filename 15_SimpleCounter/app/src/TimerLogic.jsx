import { useState, useEffect, useCallback } from 'react';

export const useTimer = () => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [alertTime, setAlertTime] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const tick = useCallback(() => {
    setSecondsElapsed((prevSeconds) => prevSeconds + 1);
  }, []);

  useEffect(() => {
    if (secondsElapsed === alertTime) {
      alert(`Time reached: ${alertTime} seconds`);
      setIsActive(false);
      setSecondsElapsed(0); 
    }
  }, [secondsElapsed, alertTime]);

  useEffect(() => {
    let intervalId = null;

    if (isActive) {
      intervalId = setInterval(tick, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, tick]);

  const startTimer = useCallback(() => setIsActive(true), []);
  const stopTimer = useCallback(() => setIsActive(false), []);
  const resetTimer = useCallback(() => {
    setIsActive(false);
    setSecondsElapsed(0);
  }, []);
  const resumeTimer = useCallback(() => setIsActive(true), []);

  return {
    secondsElapsed,
    alertTime,
    setAlertTime,
    startTimer,
    stopTimer,
    resetTimer,
    resumeTimer
  };
};
