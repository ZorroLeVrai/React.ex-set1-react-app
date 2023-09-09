import { useState } from "react";
import ListGroupItem from "./ListGroupItem";

export default function ListGroup({ items, heading, onSelectItem }) {
  const [lastClickedIndex, setLastClickedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <ListGroupItem
            key={index}
            text={item}
            highlighted={lastClickedIndex === index}
            onClickHandler={() => {
              setLastClickedIndex(index);
              onSelectItem(item);
            }}
          />
        ))}
      </ul>
    </>
  );
}
