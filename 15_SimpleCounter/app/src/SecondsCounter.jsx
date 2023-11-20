import React from 'react';
import './SecondsCounter.css';
import clockIcon from './clock-regular.svg'; // Import the SVG as a module

const SecondsCounter = ({ seconds }) => {
    // Format seconds to at least 2 digits, add more if you need
    const formattedSeconds = String(seconds).padStart(2, '0');

    // Split the formattedSeconds into an array of single characters
    const digits = formattedSeconds.split('');

    return (
        <div className="seconds-counter">
            {/* Wrap the clock icon in a container similar to the digits */}
            <div className="digit-container">
                <img src={clockIcon} alt="Clock" className="clock-icon" />
            </div>
            {/* Map over each digit and wrap it in a span */}
            {digits.map((digit, index) => (
                <div key={index} className="digit-container">{digit}</div>
            ))}
        </div>
    );
};

export default SecondsCounter;
