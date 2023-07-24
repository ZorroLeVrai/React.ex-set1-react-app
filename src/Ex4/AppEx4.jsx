import ItemCounter from "./Components/ItemCounter";
import Cart from "./Components/Cart";
import styled from "styled-components";
import { useState } from "react";

const DivMediumWidth = styled.div`
  width: 18rem;
`;

export default function AppEx4() {
  const [cartItems, setCartItems] = useState([]);
  const nbItems = cartItems.length;

  const onAddHanlder = () =>
    setCartItems([...cartItems, `Item ${nbItems + 1}`]);
  const onRemoveHanlder = () =>
    setCartItems(cartItems.filter((item, index) => index < nbItems - 1));

  return (
    <DivMediumWidth>
      <ItemCounter nbItems={nbItems} />
      <Cart
        cardItems={cartItems}
        onAddHandler={onAddHanlder}
        onRemoveHandler={onRemoveHanlder}
      />
    </DivMediumWidth>
  );
}
