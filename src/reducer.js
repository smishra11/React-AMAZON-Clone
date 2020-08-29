export const initialState = {
  basket: [
    {
      id: "5",
      title:
        "Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Space Grey (2nd Generation)",
      price: 74999,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._SX679_.jpg",
    },
    {
      id: "5",
      title:
        "Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Space Grey (2nd Generation)",
      price: 74999,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._SX679_.jpg",
    },
  ],
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
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket`
        );
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
