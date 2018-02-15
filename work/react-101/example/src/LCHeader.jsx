import React from 'react';

// This is very basic, but in App I don't know nor do I care how complex the subcomponents are
// App just doesn't have to worry about anything other than it's own complexity

// this function is passed an object that holds all the properties (attribute-like values) passed in the parent Component
// Here I'm pulling the value for the 'title' key of that object and ignoring the rest
const LCHeader = ({ title }) => {
  return (
    <header className="lc-header">
      {title}
    </header>
  );
};

export default LCHeader;
