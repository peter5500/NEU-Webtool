import React from 'react';
import './App.css';

const GuessButton = ({ onClick, text, disabled, onKeyPress}) => {
  return (
    <button 
      onClick = {(event) => onClick(event)}
      disabled = {disabled}
      onKeyPress={(event) => onKeyPress(event)}
    >
      {text}
    </button>
  );
};

export default GuessButton;