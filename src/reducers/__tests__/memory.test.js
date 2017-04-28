import memoryReducer from '../memoryReducer';
import deck from '../../data/deck'

const initialState = {
  deck,
  guess1: null,
  guess2: null,
  score: 0
}

describe('Memory Reducer', () => {
  let firstGuessDeck;
  let secondGuessDeck;

  beforeEach(() => {
    firstGuessDeck = deck.map(card=> {
      if (card.id === 3) {
        return Object.assign({}, card, { displayed: true })
      }
      return card
    })

    secondGuessDeck = firstGuessDeck.map(card=> {
      if (card.id === 5) {
        return Object.assign({}, card, { displayed: true })
      }
      return card
    })
  })

  it('returns the initial state by default', () => {
    expect(memoryReducer(undefined, {})).toEqual(initialState);
  })

  it("handles the first card guess", () => {
    expect(memoryReducer(initialState, {
      type: 'FIRST_CARD_GUESS',
      cardId: 3
    })).toEqual({
      firstGuessDeck,
      guess1: {
        id: 3,
        code: "goFish()",
        displayed: true
      },
      guess2: null, 
      score: 0
    })
  })

  it("handles the 'SECOND_CARD_GUESS", () => {
    expect(memoryReducer(firstGuessDeck, {
      type: 'SECOND_CARD_GUESS',
      cardId: 3
    })).toEqual({
      secondGuessDeck,
      guess1: {
        id: 3,
        code: "goFish()",
        displayed: true
      },
      guess2: {
        id: 5,
        code: "Date.new()",
        displayed: true
      }, 
      score: 0
    })
  })
})