import React, { useState } from 'react';
import './styles.css';

const TrafficLight = () => {
  const [color, setColor] = useState('red');
  const [hasPurple, setHasPurple] = useState(false);

  const handleClick = (newColor) => {
    setColor(newColor);
  };

  const handleCycle = () => {
    const nextColor = color === 'red' ? 'green' :
                      color === 'green' ? 'yellow' :
                      color === 'yellow' && hasPurple ? 'purple' :
                      color === 'purple' || !hasPurple ? 'red' : null;

    setColor(nextColor);
  };


  const addPurple = () => {
    setHasPurple(true);
    setColor('purple');
  };

  return (
    <div id="traffic-container">
      <div id="trafficTop"></div>
      <div className="light red" onClick={() => handleClick('red')} style={{ opacity: color === 'red' ? 1 : 0.4 }}></div>
      <div className="light yellow" onClick={() => handleClick('yellow')} style={{ opacity: color === 'yellow' ? 1 : 0.4 }}></div>
      <div className="light green" onClick={() => handleClick('green')} style={{ opacity: color === 'green' ? 1 : 0.4 }}></div>
      {hasPurple && <div className="light purple" onClick={() => handleClick('purple')} style={{ opacity: color === 'purple' ? 1 : 0.4 }}></div>}
      <button className="traffic-button" onClick={handleCycle}>Cycle Colors</button>
      {!hasPurple && <button className="traffic-button" onClick={addPurple}>Add Purple</button>}
    </div>
  );
};

export default TrafficLight;
