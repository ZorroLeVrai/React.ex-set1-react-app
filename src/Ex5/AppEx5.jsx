import { useState } from "react";
import ListGroup from "./Components/ListGroup";
import SelectedCity from "./Components/SelectedCity";

const cities = ["New York", "Tokyo", "London", "Paris"];
export default function AppEx5() {
  const [city, setCity] = useState("");

  const handleSelectItem = (item) => setCity(item);
  return (
    <>
      <ListGroup
        items={cities}
        heading="City list"
        onSelectItem={handleSelectItem}
      />
      <SelectedCity city={city} />
    </>
  );
}
