import React, { Component } from 'react';
import './App.css';
import NavBarContainer from './components/NavBarContainer'
import AboutContainer from './components/AboutContainer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBarContainer />
        <AboutContainer />
      </div>
    );
  }
}

export default App;
