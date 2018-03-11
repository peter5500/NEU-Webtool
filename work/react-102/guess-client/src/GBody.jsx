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
                commonLetter={history.commonLetter1}
              />
            </div>
          </div>
          <div>
            <div className="name">Robot guess history</div>
            <div className="player">
              <HistoryResult
                result={history.result2}
                guess={wordInfo.word2}
                commonLetter={history.commonLetter2}
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