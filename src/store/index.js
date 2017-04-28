import { 
  createStore, 
  combineReducers
} from 'redux';
import round from '../reducers/round';

const state = combineReducers({
  round,
})

export default createStore(
  state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


// store = {
//   round: {
//     deck: [ {}],
//     firstGuess: {},
//     secondGuess: {},
//     score: 0
//   }
// }
