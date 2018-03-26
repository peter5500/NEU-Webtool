import React from 'react';
import './App.css';

const GuessButton = ({ onClick, text, disabled}) => {
  return (
    <button 
      onClick = {(event) => onClick(event)}
      disabled = {disabled}
    >
      {text}
    </button>
  );
};

export default GuessButton;