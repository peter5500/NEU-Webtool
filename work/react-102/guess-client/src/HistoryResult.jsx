import React from 'react';
import './App.css';
import { getList, select, guess } from "./services/list";

const HistoryResult = ({ result, guess, commonLetter }) => {
  if (result.length === 0) {
    return <li>No guess history..</li>;
  }
  const resultList = result.map((value, index) => {
    return (
      <li key={index}>
        {value}: You got {commonLetter[index]} in common
      </li>
    );
  });
  return resultList;
};

export default HistoryResult;