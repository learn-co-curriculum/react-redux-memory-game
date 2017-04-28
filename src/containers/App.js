import React, { Component } from 'react';
import ScoreBoard from '../components/ScoreBoard';
import Cards from '../components/Cards';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="centered">
        <ScoreBoard score={33}/>
        <Cards />
      </div>
    );
  }
}

export default App;
