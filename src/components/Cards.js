import React, { Component } from 'react';

class Cards extends Component {
  render() {

    var cards = [1,2,3,4,5,6,7,8,9,10,11,12].map((card, index) =>
      <div className="card">
        <h1>{card}</h1>
      </div>
    )
    return (
      <div className="cards">
        {cards}
      </div>
    )
  }
}

export default Cards;