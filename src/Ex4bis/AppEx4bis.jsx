import ItemCounter from "./Components/ItemCounter";
import Cart from "./Components/Cart";
import styled from "styled-components";
import { useReducer } from "react";
import { CART_ACTION } from "./cartAction";

const DivMediumWidth = styled.div`
  width: 18rem;
`;

//Using a reducer function
function cartReducer(cartItems, action) {
  switch (action.type) {
    case CART_ACTION.ADD_ITEM:
      return [...cartItems, `Item ${cartItems.length + 1}`]
    case CART_ACTION.REMOVE_ITEM:
      return cartItems.slice(0, -1);
    default:
      throw Error(`cartReducer Action type unknwon (${action.type})`);
  }
}

export default function AppEx4bis() {
  const [cartItems, dispatch] = useReducer(cartReducer, []);
  const nbItems = cartItems.length;

  return (
    <DivMediumWidth>
      <ItemCounter nbItems={nbItems} />
      <Cart
        cardItems={cartItems}
        dispatch={dispatch}
      />
    </DivMediumWidth>
  );
}
