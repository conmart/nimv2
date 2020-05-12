export const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_GAME":
      return action.payload;
    case "INSTRUCTIONS":
      return {
        ...state,
        showInstructions: action.payload,
      }
    case "DOT_CLICKED":
      const { gameBoard } = state;
      const newGameBoard = {
        ...gameBoard,
        remainingDots: action.payload,
      };
      return {
        ...state,
        gameBoard: newGameBoard,
      };
    case "TAKE_TURN":
      return {
        ...state,
        gameBoard: action.payload,
      }
    default:
      return state;
  }
};
