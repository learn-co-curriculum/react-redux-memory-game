const firstCardGuess = (id) => {
  return {
    type: "FIRST_CARD_GUESS",
    id
  }
}

const secondCardGuess = (id) => {
  return {
    type: "SECOND_CARD_GUESS",
    id
  }
}