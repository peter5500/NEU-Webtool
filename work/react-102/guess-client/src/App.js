import React, { Component } from 'react';
import { mapAllWords, pickWord } from './wordlist';
import GBody from './GBody';
import './App.css';
import { getList, select, guess } from './services/list';

const history = {
  result1: [],
  result2: [],
  count: 0,
  commonLetter1: [],
  commonLetter2: [],
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordInfo: {},
      disabled: true,
      inputDisabled: false,
      won: false,
      button: 0,
      buttonText: ['Begin', 'Guess', 'Reset'],
      statusMessage: 'Enter a common 5 letter word for them to guess',
      inputValue: '',
      error: '',
    };

    this.reset = this.reset.bind(this);
    this.begin = this.begin.bind(this);
    this.guess = this.guess.bind(this);
    this.enterPress = this.enterPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.updateWord = this.updateWord.bind(this);
    this.checkInputWord = this.checkInputWord.bind(this);
    this.fetchList = this.fetchList.bind(this);
    this.handleList = this.handleList.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillMount() {
    this.fetchList();
  }

  fetchList() {
    getList()
    .then(list => this.handleList(list))
    .catch( e => console.log(e));
  }

  handleList(list=[]) {
    const wordInfo = {
      wordlist: list,
      allWords: mapAllWords(list),
    };

    this.setState({
      wordInfo,
    });
    
  }

  updateWord(word) {
    this.setState({
      inputValue: word
    });
  }

  handleSelect(guess) {
    select(guess)
    .then(id => this.setState({
      id: id,
    })
  )
  .catch(e => console.log(e));
  }

  reset() {
    this.setState({
      won: false,
      button: 0,
      inputValue: '',
      disabled: true,
      inputDisabled: false,
      statusMessage: 'Enter a common 5 letter word for them to guess'
    });
    history.result1 = [];
    history.result2 = [];
    history.count = 0;
  }

  begin(input) {
    this.handleSelect(this.state.inputValue.toUpperCase());
    this.setState({
      button: 1,
      inputValue: '',
      statusMessage: 'Enter a common 5 letter word to guess',
      disabled: true,
    });
  }

  checkInputWord(event) {
    history.count++;
    let inputValue = this.state.inputValue.toUpperCase();
    this.setState({
      inputValue: ''
    });
    history.result1.push(inputValue);
    history.result2.push(pickWord(this.state.wordInfo.wordlist));
    this.handleGuess(inputValue, history.result2[history.result2.length - 1]);
  }

  checkWin(data) {
    if (data.win1) {
      this.setState({
        statusMessage: `Congrats, You win in ${history.count} turns!`,
        button: 2,
        inputDisabled:true,
        won: true,
      });
    }

    else if (data.win2) {
      this.setState({
        statusMessage: `Computer wins in ${history.count} turns..`,
        button: 2,
        inputDisabled:true,
        won: true,
      });
    } 
      history.commonLetter1.push(data.commonLetter1);
      history.commonLetter2.push(data.commonLetter2);
      this.setState({});
  }

  handleGuess(playerGuess, computerGuess){
    guess(this.state.id, playerGuess, computerGuess)
    .then(data => this.checkWin(data))
    .catch(error => this.setState({
      error: error,
    }));
  }

  guess(event) {
    this.checkInputWord(event);
  }

  handleKeyUp(event) {
    if (event.target.value.length === 5) {
      if (this.state.wordInfo.allWords.has(event.target.value.toUpperCase())) {
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
        wordInfo={this.state.wordInfo}
        onClick={onClick}
        handleKeyUp={this.handleKeyUp}
        clearInputValue={this.clearInputValue}
        inputValue={this.state.inputValue}
        onUpdateWord={this.updateWord}
        inputDisabled={this.state.inputDisabled}
        onKeyPress={this.enterPress}
        error={this.state.error}
      />
    );
  }

  
}

export default App;