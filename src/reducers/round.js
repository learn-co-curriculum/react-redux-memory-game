import deck from '../data/deck';
const deckToShuffle = [...deck]

function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}
shuffle(deckToShuffle)


const initialState = {
  deck: deckToShuffle,
  guess1: {},
  guess2: {},
  score: 0
}

export default (state = initialState, action) => {
  switch(action.type) {

    case "FIRST_CARD_GUESS":
    
    case "SECOND_CARD_GUESS":

    default:
      return state;
  }
}