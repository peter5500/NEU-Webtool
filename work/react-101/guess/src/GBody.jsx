import React from 'react';
import GButton from './GButton';
import HistoryResult from './HistoryResult';
import './App.css';

const GBody = ({
  buttonText,
  statusMessage,
  handleKeyUp,
  inputValue,
  clearInputValue,
  onUpdateWord,
  disabled,
  preGuess,
  history,
  wordInfo,
  onClick,
  onKeyPress,
}) => {
  const commonLetter = (guess, word) => {
    const tries = Array(26).fill(0);
    const target = Array(26).fill(0);
    let count = 0;
    for( let i = 0; i < 5; i++ ){
      tries[guess.charCodeAt(i) - 'A'.charCodeAt()] += 1;
    }
    for( let k = 0; k < 5; k++ ){
      target[word.charCodeAt(k) - 'A'.charCodeAt()] += 1;
    }
    for( let j = 0; j < 26; j++ ){
      if( tries[j] > 0 && target[j] > 0 ){
        count += Math.min(tries[j], target[j]);
      }
    }
    return count;
  };

  const updateWord = event => {
    onUpdateWord(event.target.value); 
  };

  return (
    <div>
      <h1>Welcome to word guess game</h1>
    <div className="container">
        <div className="guess-result">
          <div>
            <div className="name">Player guess history</div>
            <div className="player">
              <HistoryResult
                result={history.result1}
                guess={wordInfo.word1}
                commonLetter={commonLetter}
              />
            </div>
          </div>
          <div>
            <div className="name">Robot guess history</div>
            <div className="player">
              <HistoryResult
                result={history.result2}
                guess={wordInfo.word2}
                commonLetter={commonLetter}
              />
            </div>
          </div>
        </div>

        <div className="input-area">
          <div>
            <input
              type="text"
              maxLength="5"
              value={inputValue}
              onKeyUp={handleKeyUp}
              onChange={updateWord}
            />
          </div>
          <div className="guess-history">Bot guess: {preGuess}</div>
        </div>

        <div className="status">Hint: {statusMessage}</div>

        <div className="button-style">
          <GButton
            onClick={onClick}
            text={buttonText}
            disabled={disabled}
            input={() => this.input(this.input)}
          />
        </div>
    </div>
    </div>
  );
};

export default GBody;
