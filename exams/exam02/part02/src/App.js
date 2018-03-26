import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import config from './config.json';
import GuessBody from './GuessBody';
import { start, getGuess, getCommon, reset } from './service/list';

const history = {
  result1:[],
  commonLetter1:[],
  result2:[],
  commonLetter2:[],
  count:0,
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      btnText: "start",
      statusMessage: "Press button to start the competition",
      disabled: false,
      alfredCommon: {},
      barbaraCommon: {},
    }

    this.startListener = this.startListener.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleAlfredGuess = this.handleAlfredGuess.bind(this);
    this.handleBarbaraGuess = this.handleBarbaraGuess.bind(this);
    this.getAlfredCommon = this.getAlfredCommon.bind(this);
    this.getBarbaraCommon = this.getBarbaraCommon.bind(this);
    this.updateAlfredHistory = this.updateAlfredHistory.bind(this);
    this.updateBarbaraHistory = this.updateBarbaraHistory.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  async startListener() {
    this.setState({
      disabled: true,
      statusMessage: "Competing....waiting for the winner"
    })
      await this.handleStart();
      console.log(this.state.secret1 + "/" + this.state.secret2);
    while (true) {
      history.count += 1;
      await this.handleAlfredGuess();
      if (this.state.won) {
        this.setState({
          winner: "Alfred"
        });
        break;
      }
      await this.handleBarbaraGuess();
      if (this.state.won) {
        this.setState({
          winner: "Barbara"
        });
        break;
      }
    }
    this.handleDelete();
    this.setState({
      btnText: "New game",
      statusMessage: this.state.winner + " wins in " + history.count + " turns!" ,
      disabled: false,
    })
  }

  async handleStart() {
    try {
      await start(config.alfred)
      .then(data => this.setState({
        id1: data.id,
        secret1: data.secret,
      }));
      await start(config.barbara)
      .then(data => this.setState({
        id2: data.id,
        secret2: data.secret,
      }));
    } catch(error) {
      console.log(error);
    }
  }

  async handleAlfredGuess(){
    try {
      await getGuess(config.alfred, this.state.id1, {})
      .then(data => this.getAlfredCommon(data));
    } catch (error) {
      console.log(error);
    }
  }

  async getAlfredCommon(data) {
    try {
      await getCommon(config.barbara, this.state.id2, data.guess)
      .then(backData => this.updateAlfredHistory(backData, data.guess));
    } catch (error) {
      console.log(error);
    }
  }

  async updateAlfredHistory(backData, guess) {
    history.result1.push(guess);
    history.commonLetter1.push(backData.matched);
    this.setState({
        won: backData.hasWon,
      });
  }

  async handleBarbaraGuess(){
    try {
      await getGuess(config.barbara, this.state.id2, {})
      .then(data => this.getBarbaraCommon(data));
    } catch (error) {
      console.log(error);
    }
  }

  async getBarbaraCommon(data) {
    try {
      await getCommon(config.alfred, this.state.id1, data.guess)
      .then(backData => this.updateBarbaraHistory(backData, data.guess));
    } catch (error) {
      console.log(error);
    }
  }

  async updateBarbaraHistory(backData, guess) {
    history.result2.push(guess);
    history.commonLetter2.push(backData.matched);
    this.setState({
        won: backData.hasWon,
      });
  }

  async handleDelete() {
    try {
      await reset(config.alfred, this.state.id1);
      await reset(config.barbara, this.state.id2);
    } catch (error) {
      console.log(error);
    }
  }


  newGame(event) {
    history.result1 = [];
    history.result2 = [];
    history.count = 0;
    history.commonLetter1 = [];
    history.commonLetter2 = [];
    this.setState({
      btnText:"start",
      alfredCommon: {},
      barbaraCommon: {},
      statusMessage: "Press the button to start the competition",
    });
  }
  
  render(){
    let onClick;
    if (this.state.btnText === "start") {
      onClick = this.startListener;
    } else {
      onClick = this.newGame;
    }
    return(
      <GuessBody
        btnText = {this.state.btnText}
        history = {history}
        secret1 = {this.state.secret1}
        secret2 = {this.state.secret2}
        disabled = {this.state.disabled}
        onClick={onClick}
        statusMessage = {this.state.statusMessage}
      />
    );
  }
}


export default App;
