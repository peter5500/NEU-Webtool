import React from 'react';
import './App.css';

const ResultHistory = ({ result, commonLetter }) => {
  if (result.length === 1) {
    return <li>No guesses made yet</li>;
  }

  console.log(result.length);

  const resultList = result.map((value, index) => {
    return (
      <li key={index}>
        {value}: {commonLetter[index]} in common..
      </li>
    );
  });
  return resultList;
};

export default ResultHistory;