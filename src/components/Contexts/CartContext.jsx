import React, { Children, createContext } from "react";

const CartContext = () => {
  export const CartContext = createContext();
  const initialState = { cart: [] };
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const existingItemIndex = state.cart.findIndex;
      case "CLEAR_CART":
        return {};
      default:
        return state;
    }
  };
  return <div>CartContext</div>;
};
export default CartContext;
