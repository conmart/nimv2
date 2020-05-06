export const reducer = (state, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      console.log('hit case')
      return {
        ...state,
        welcomeScreen: action.payload,
      };
      default:
        return state;
  }
};
