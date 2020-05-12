export const initialState = {
  activeGame: true,
  gameBoard: {
    player1Turn: true,
    remainingDots: [
      [false],
      [false, false, false],
      // [false, false, false, false, false],
      // [false, false, false, false, false, false, false],
    ],
  },
  showInstructions: false,
};
