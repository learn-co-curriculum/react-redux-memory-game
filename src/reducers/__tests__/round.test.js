import reducer from '../round';
import deck from '../../data/deck'

const initialState = {
  deck,
  guess1: {},
  guess2: {},
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
    expect(reducer(undefined, {})).toEqual(initialState);
  })

  it("handles the first card guess", () => {
    expect(reducer(initialState, {
      type: 'FIRST_CARD_GUESS',
      cardId: 3
    })).toEqual({
      deck: firstGuessDeck,
      guess1: {
        id: 3,
        code: "goFish()",
        displayed: true
      },
      guess2: {}, 
      score: 0
    })
  })

  it("handles the 'SECOND_CARD_GUESS", () => {
    expect(reducer({
      deck: firstGuessDeck,
      guess1: {
        id: 3,
        code: "goFish()",
        displayed: true
      },
      guess2: {}, 
      score: 0
    }, {
      type: 'SECOND_CARD_GUESS',
      cardId: 5
    })).toEqual({
      deck: secondGuessDeck,
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