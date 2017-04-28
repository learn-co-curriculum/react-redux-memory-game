import deck from '../data/deck';

const initialState = {
  deck,
  guess1: {},
  guess2: {},
  score: 0
}

export default (state = initialState, action) => {
  return state;
}