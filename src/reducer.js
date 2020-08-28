export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action.item);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      return { state };
    default:
      return state;
  }
};

export default reducer;
