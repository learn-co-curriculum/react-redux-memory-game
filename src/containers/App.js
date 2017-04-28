import React, { Component } from 'react';

import ScoreBoard from '../components/ScoreBoard';
import Cards from '../components/Cards';

import './App.css';
import deck from '../data/deck'

class App extends Component {
  render() {
    return (
      <div className="centered">
        <ScoreBoard score={33}/>
        <Cards deck={deck}/>
      </div>
    );
  }
}

export default App;
