import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CatList from './CatList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <CatList/>
        <Footer/>
      </div>
    );
  }
}

export default App;
