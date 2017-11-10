import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import About from './components/About'
import Portfolio from './components/Portfolio'

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <About />
        <Portfolio />
      </div>
    );
  }
}

export default App;
