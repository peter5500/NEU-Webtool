import React from 'react';
import './App.css';

const GButton = ({ onClick, text, disabled, input }) => {
  return (
    <button 
      onClick={(event, input) => onClick(event, input)}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default GButton;