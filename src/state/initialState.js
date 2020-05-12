export const initialState = {
  activeGame: false,
  gameBoard: {
    player1Turn: true,
    remainingDots: [
      [false],
      [false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
  },
  showInstructions: false,
};
