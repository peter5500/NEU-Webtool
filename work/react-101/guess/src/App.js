import React, { Component } from 'react';
import { allWords, mapAllWords, pickWord } from './wordlist';
import GBody from './GBody';
import './App.css';

const history = {
  result: [],
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
      buttonText: ['Guess', 'Reset'],
      statusMessage: 'Enter a common 5 letter word for them to guess',
      inputValue: ''
    };

    this.reset = this.reset.bind(this);
    this.guess = this.guess.bind(this);
    this.enterPress = this.enterPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.updateWord = this.updateWord.bind(this);
    this.checkInputWord = this.checkInputWord.bind(this);
  }

  componentWillMount(){
    wordInfo.word1 = pickWord(wordInfo.wordlist);
    console.log(wordInfo.word1);
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
    history.result = [];
    history.count = 0;
    wordInfo.word1 = pickWord(wordInfo.wordlist);
    console.log(wordInfo.word1);
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
        button: 1
      });
    }

    history.result.push(inputValue);
  }

  guess(event) {
    this.checkInputWord(event);
    this.setState({
      disabled: true,
    });
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
        if (this.state.buttonText[this.state.button] === 'Guess') {
          this.setState({
            statusMessage:
              'Unknown word. Choose a different common 5 letter word to guess'
          });
        }
      }
    } else {
      event.target.style.color = 'grey';
      if (this.state.buttonText[this.state.button] === 'Guess') {
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
    let enterPress;
    if (event.key === "Enter"){
      enterPress = this.guess;
    }
  }

  render() {
    let buttonText = this.state.buttonText[this.state.button];
    let onClick;
    if (this.state.button === 0) {
      onClick = this.guess;
    } else if (this.state.button === 1) {
      onClick = this.reset;
    }

    return (
      <GBody
        buttonText={buttonText}
        statusMessage={this.state.statusMessage}
        disabled={this.state.disabled}
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
