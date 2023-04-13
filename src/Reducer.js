//here we define all the application level states and define actions to make to the state

export const initialState = {
  basket: [],
};

// Selector

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
    //do nothing
  }
};

export default reducer;