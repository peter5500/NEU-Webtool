import React from 'react';
import './App.css';

const GButton = ({ onClick, text, disabled, input, onKeyPress }) => {
  return (
    <button 
      onClick={(event, input) => onClick(event, input)}
      disabled={disabled}
      onKeyPress={(event) => onKeyPress(event)}
    >
      {text}
    </button>
  );
};

export default GButton;
