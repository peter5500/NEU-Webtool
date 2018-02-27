import React, { Component } from 'react';
import './App.css';

// Components
import LCHeader from './LCHeader';
import LCBody from './LCBody';
import LCControls from './LCControls';

// logic functions
import { vowelCounter, letterCounter } from './letterCounters';

// Some config values
import config from './lc-config';

const counterFunc = {     // I'm lazy, this saves lines later
  letters: letterCounter,
  vowels: vowelCounter
};

class App extends Component {
  constructor(props) {
    super(props);
    // Set the initial state - the only place you modify this.state directly
    this.state = {
      modes: ['letters', 'vowels'],
      mode: 'letters',
      results: [],
      word: ''
    };

    // Remember - functions that use 'this' and are passed as callbacks
    // need explicit binding, or else 'this' will be the wrong value
    this.tallyLetters = this.tallyLetters.bind(this);
    this.toggleMode = this.toggleMode.bind(this);
    this.updateWord = this.updateWord.bind(this);
  }

  updateWord(word) {
    this.setState({ // setState only changes values that you send the key for
      word
    }); // this.state.mode, for example, is unchanged here
  }

  tallyLetters() {
    if( !this.state.word ) { // Don't do anything if there are no letters
      return;
    }

    const count = counterFunc[this.state.mode](this.state.word); // this can call different fucntions, without a big 'if' statements
    this.setState( {
      results: [...this.state.results, {
        word: this.state.word,
        count,
        mode: config.resultLabels[this.state.mode] // Same logic as modeLabel in render() below
      }],
      word: '' // blank out the word after use
    });
  }

  toggleMode() {
    const position = this.state.modes.indexOf(this.state.mode);
    if(position === this.state.modes.length - 1) {
      this.setState({
        mode: this.state.modes[0]
      });
    } else {
      this.setState({
        mode: this.state.modes[position + 1]
      });
    }
    // I could have replaced all but the first line with:
    // this.setState({ mode: this.state.modes[position % 2] })
  }

  render() {
    // modeLabel separates my display text from my variable values
    //
    // I could have translated "letters" and "vowels" to "Letters" and "Vowels"
    // but if I'm then told to change the text "Letters" to "Characters", I have
    // to jump through hoops to keep my data the same but my display different.
    // this way they are separate from the start.
    const modeLabel = config.modeLabels[this.state.mode];
    // Notice how my properties and my functions don't have matching names
    // And how the components don't use the actual onXXX attributes they will use?
    // That's to decouple WHEN a component does a thing from HOW it is done
    // and WHY it is doing it
    return (
      <div className="letter-counter">
        <LCHeader title="Welcome To Letter Counter"/>
        <LCBody results={this.state.results}/>
        <LCControls
          mode={modeLabel}
          word={this.state.word}
          onChangeMode={this.toggleMode}
          onCount={this.tallyLetters}
          onUpdateWord={this.updateWord}
        />
      </div>
    ); // LCControls above has a lot of properties, so I made it multi-line
    // See how the application state (this.state) has different parts go to different subcomponents
    // Those components don't know about the application state - they only know the values they are passed
  }
}

export default App;
