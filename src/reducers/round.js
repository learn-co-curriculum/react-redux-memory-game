import deck from '../data/deck';
// const deckToShuffle = [...deck]

// function shuffle(a) {
//   for (let i = a.length; i; i--) {
//     let j = Math.floor(Math.random() * i);
//     [a[i - 1], a[j]] = [a[j], a[i - 1]];
//   }
// }
// shuffle(deckToShuffle)


const initialState = {
  deck,
  guess1: {},
  guess2: {},
  score: 0
}

export default (state = initialState, action) => {
  // action = {
  //   type: 'FIRST_CARD_GUESS',
  //   cardId: 3
  // }
  switch(action.type) {

    case "FIRST_CARD_GUESS":
      let guessCard = {};
      const newDeck = state.deck.map(card => {
        if (card.id === action.cardId) {
          guessCard = Object.assign({}, card, { displayed: true })
          return Object.assign({}, card, { displayed: true })
        }
        return card
      })
      return {
        ...state,
        deck: newDeck,
        guess1: guessCard,
      }
    
    case "SECOND_CARD_GUESS":

    default:
      return state;
  }
}