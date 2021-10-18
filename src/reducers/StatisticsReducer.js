export const statisticsReducer = (state, action) => {
  switch (action.type) {
    case 'STATISTICS':
      return {...action.payload};
    default:
      return state;
  }
};
