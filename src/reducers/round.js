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
let guessCard = {}

export default (state = initialState, action) => {
  switch(action.type) {

    case "FIRST_CARD_GUESS":
      return {
        ...state,
        deck: state.deck.map(card => {
          if (card.id === action.cardId) {
            guessCard = Object.assign({}, card, { displayed: true })
            return Object.assign({}, card, { displayed: true })
          }
          return card
        }),
        guess1: guessCard,
      }
    
    case "SECOND_CARD_GUESS":
      return {
        ...state,
        deck: state.deck.map(card => {
          if (card.id === action.cardId) {
            guessCard = Object.assign({}, card, { displayed: true })
            return Object.assign({}, card, { displayed: true })
          }
          return card
        }),
        guess2: guessCard,
      }

    default:
      return state;
  }
}