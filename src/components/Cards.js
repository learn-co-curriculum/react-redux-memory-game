import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {
  render() {
    const cards = this.props.deck.map(card => <Card key={card.id} {...card} />);

    return (
      <div className="cards">
        {cards}
      </div>
    )
  }
}

export default Cards;