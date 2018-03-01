import React, { Component } from 'react';
import { allWords, mapAllWords, pickWord } from './wordlist';
import GBody from './GBody';
import './App.css';

const history = {
  result1: [],
  result2: [],
  count: 0
};

const wordInfo = {
  wordlist: allWords(),
  allWords: mapAllWords()
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      won: false,
      button: 0,
      buttonText: ['Begin', 'Guess', 'Reset'],
      statusMessage: 'Enter a common 5 letter word for them to guess',
      inputValue: ''
    };

    this.reset = this.reset.bind(this);
    this.begin = this.begin.bind(this);
    this.guess = this.guess.bind(this);
    this.enterPress = this.enterPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.updateWord = this.updateWord.bind(this);
    this.checkInputWord = this.checkInputWord.bind(this);
  }

  updateWord(word) {
    this.setState({
      inputValue: word
    });
  }

  reset() {
    this.setState({
      won: false,
      button: 0,
      inputValue: '',
      disabled: true,
      statusMessage: 'Enter a common 5 letter word for them to guess'
    });
    history.result1 = [];
    history.result2 = [];
    history.count = 0;
  }

  begin(input) {
    wordInfo.word2 = this.state.inputValue.toUpperCase();
    console.log(wordInfo.word2);
    wordInfo.word1 = pickWord(wordInfo.wordlist);
    console.log(wordInfo.word1);
    this.setState({
      button: 1,
      inputValue: '',
      statusMessage: 'Enter a common 5 letter word to guess',
      disabled: true
    });
  }

  computerGuess() {
    history.result2.push(pickWord(wordInfo.wordlist).toUpperCase());
    if (history.result2[history.result2.length - 1] === wordInfo.word2) {
      this.setState({
        statusMessage: `Computer wins in ${history.count} turns..`,
        button: 2
      });
    }
  }

  checkInputWord(event) {
    history.count++;
    let inputValue = this.state.inputValue.toUpperCase();
    this.setState({
      inputValue: ''
    });
    if (wordInfo.word1 === inputValue) {
      this.setState({
        statusMessage: `Congrats, You win in ${history.count} turns!`,
        button: 2
      });
    }

    this.computerGuess();
    history.result1.push(inputValue);
  }

  guess(event) {
    this.checkInputWord(event);
  }

  handleKeyUp(event) {
    if (event.target.value.length === 5) {
      if (wordInfo.allWords.has(event.target.value.toUpperCase())) {
        event.target.style.color = 'green';
        this.setState({
          disabled: false,
          inputValue: event.target.value
        });
      } else {
        event.target.style.color = 'red';
        if (this.state.buttonText[this.state.button] === 'Begin') {
          this.setState({
            statusMessage:
              'Unknown word. Choose a different common 5 letter word for them to guess'
          });
        } else if (this.state.buttonText[this.state.button] === 'Guess') {
          this.setState({
            statusMessage:
              'Unknown word. Choose a different common 5 letter word to guess'
          });
        }
      }
    } else {
      event.target.style.color = 'grey';
      if (this.state.buttonText[this.state.button] === 'Begin') {
        this.setState({
          statusMessage: 'Enter a common 5 letter word for them to guess'
        });
      } else if (this.state.buttonText[this.state.button] === 'Guess') {
        this.setState({
          statusMessage: 'Enter a common 5 letter word to guess'
        });
      }
      this.setState({
        disabled: true
      });
    }
  }

  enterPress(event){
    if (event.key === "Enter"){
      this.props.guess();
    }
  }

  render() {
    let buttonText = this.state.buttonText[this.state.button];
    let onClick;
    if (this.state.button === 0) {
      onClick = this.begin;
    } else if (this.state.button === 1) {
      onClick = this.guess;
    } else if (this.state.button === 2) {
      onClick = this.reset;
    }

    return (
      <GBody
        buttonText={buttonText}
        statusMessage={this.state.statusMessage}
        disabled={this.state.disabled}
        preGuess={history.result2[history.result2.length - 1]}
        history={history}
        wordInfo={wordInfo}
        onClick={onClick}
        handleKeyUp={this.handleKeyUp}
        clearInputValue={this.clearInputValue}
        inputValue={this.state.inputValue}
        onUpdateWord={this.updateWord}
        onKeyPress={this.enterPress}
      />
    );
  }

  
}

export default App;
