import React from 'react';

// This is crazy simple - any time I want a button and text and nothing more, I can reuse this
// and pass in different values
// I could even add optional extra abilities if I wanted

const LCButton = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
};
export default LCButton;
