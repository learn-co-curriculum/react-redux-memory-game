import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScoreBoard from '../components/ScoreBoard';
import Cards from '../components/Cards';

import './App.css';

class App extends Component {
  render() {
    const { score, deck } = this.props.round
    
    return (
      <div className="centered">
        <ScoreBoard score={score}/>
        <Cards deck={deck}/>
      </div>
    );
  }
}

export default connect(
  state => ({
    round: state.round
  })
)(App);
