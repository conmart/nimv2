export const initialState = {
  activeGame: false,
  gameBoard: {
    dotsSelected: 0,
    player1Turn: true,
    remainingDots: [1, 3, 5, 7],
    selectedColumn: null,
  }
};
