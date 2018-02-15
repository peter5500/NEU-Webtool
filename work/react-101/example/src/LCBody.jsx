import React from 'react';

const LCBody = ({ results }) => {
  // results is an array of objects
  // I pull out each object and generate an array of <li> tags
  const resultList = results.map( ({ word, mode, count }, index) => {
    // the 'key' property is how React can decide if any elements ACTUALLY need to be replaced
    // which ends up rewriting the entire list
    //
    // Ideally you don't want to use index, but unless you have unique data you often have to
    return (<li key={index}>{word} has {count} {mode}</li>);
  });
  // Notice I don't have to play with the {mode} text here, because the parent set it in the state
  // Sometimes the labeling rules are too complex for that to work
  // But here I was able to keep this component "dumb", so the caller holds that logic

  // Below I'm dropping in a variable...that holds an array of JSX elements

  return (
    <div className="lc-body">
      <ul>
        {resultList}
      </ul>
    </div>
  );
};

export default LCBody;
