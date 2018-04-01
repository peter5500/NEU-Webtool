import React from 'react';
import GuessButton from './GuessButton';
import ResultHistory from './ResultHistory';
import './App.css';


const GuessBody = ({
  btnText,
  history,
  onClick,
  secret1,
  secret2,
  disabled,
  statusMessage,
}) => {
  return (
    <div className="body">
     <h1>Alfred vs Barbara Guessing Competition</h1>
      <div className="container">
      <div className="guess-result">
          <div>
            <div className="target-word">Alfred's Target Word : {secret2}</div>
            <div className="result">— Alfred Guess Result —</div>
            <div className="player">
              <ResultHistory
                result = {history.result1}
                commonLetter = {history.commonLetter1}
              />
            </div>
          </div>
          <div>
            <div className="target-word">Barbara's Target Word : {secret1}</div>
            <div className="result">— Barbara Guess Result —</div>
            <div className="player">
              <ResultHistory
                result = {history.result2}
                commonLetter = {history.commonLetter2}
              />
            </div>
          </div>
        </div>
        <div className="status">{statusMessage}</div>
        <div className="button">
          <GuessButton
            onClick = {onClick}
            text = {btnText}
            disabled = {disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default GuessBody;