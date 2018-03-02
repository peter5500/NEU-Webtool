import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { update, getList } from './services/list';
import { pickErrorMessage } from './messages';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      error: null
    };

  }

  componentWillMount() {
    this.fetchList();
  }

  fetchList() {
    getList()
    .then( list => this.handleList(list) )
    .catch( e => this.handleListError(e) );
  }

  handleList(list=[]) {
    this.setState({ list });
  }

  handleListError(e) {
    this.setState({
      error: e
    });
  }

  handleAdd( value ) {
    update(value)
    .then( list => this.handleList(list) )
    .catch( e => this.handleListError(e) );
  }

  clearError() {
    this.setState({
      error: null
    });
    this.fetchList();
  }

  checkForAdd(event) {
    if(event.key === 'Enter') {
      this.handleAdd(event.target.value);
      event.target.value = '';
    }
  }

  render() {
    // There should be more components to keep everything to only one purpose
    // but everything is in one place here so you can see it come together
    //
    // USE MORE FOCUSED COMPONENTS in your work

    const list = this.state.list.map( (item, index) => ( <li key={index}>{item}</li> ) );
    let message = pickErrorMessage(this.state.error);
    if( message ) {
      message = (
        <div>
          <p>{message}</p>
          <button onClick={ () => this.clearError() }>Got it</button>
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input disabled={!!this.state.error} onKeyPress={ e => this.checkForAdd(e) }/>
        <ul>
          {list}
        </ul>
        { message }
      </div>
    );
  }
}

export default App;
