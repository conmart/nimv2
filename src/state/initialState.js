export const initialState = {
  activeGame: true,
  gameBoard: {
    dotsSelected: 0,
    player1Turn: true,
    remainingDots: [1, 3, 5, 7],
    selectedColumn: null,
  }
};
