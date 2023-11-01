import React from 'react';
import './card.css';

const Card = ({ title, text }) => {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{text}</p>
        </div>
      </div>
    );
  };

  export default Card;
