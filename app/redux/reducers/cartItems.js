const cartItems = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // console.log('inside reducer....');
      // console.log(action.payload);
      return [
        ...state,

        {
          uid: Math.floor(Math.random() * Math.random(33, 55) * 999),
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
        },
      ];
    case 'REMOVE_FROM_CART':
      return state.filter((cartItems) => cartItems.uid !== action.payload.uid);
  }
  return state;
};

export default cartItems;
