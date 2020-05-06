export const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_GAME":
      return {
        ...state,
        activeGame: action.payload,
      };
    case "DOT_CLICKED":
      const { gameBoard } = state;
      const {
        payload: { dotsSelected, selectedColumn },
      } = action;
      const newGameBoard = {
        ...gameBoard,
        dotsSelected,
        selectedColumn,
      };
      return {
        ...state,
        gameBoard: newGameBoard,
      };
    default:
      return state;
  }
};
