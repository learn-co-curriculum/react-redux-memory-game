import React, { Component } from 'react';
import Cards from '../components/Cards'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="centered">
        <Cards />
      </div>
    );
  }
}

export default App;
