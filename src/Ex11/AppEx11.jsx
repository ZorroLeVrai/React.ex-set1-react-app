import { store } from "../store";
import { Provider } from "react-redux";
import InputItem from "./components/InputItem";
import List from "./components/List";

function AppEx11() {
  return (
    <Provider store={store}>
      <h1>The Task App</h1>
      <InputItem />
      <List />
    </Provider>
  );
}

export default AppEx11;
