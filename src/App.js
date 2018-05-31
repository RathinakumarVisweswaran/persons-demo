import React, { Component } from 'react';
import Persons from './component/Persons/Persons';
import './App.css';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="App">
          <h1> Hi, I am a React App... </h1>
          <Persons/>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);