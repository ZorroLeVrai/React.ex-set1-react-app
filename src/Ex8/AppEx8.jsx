import Counter from "./Counter";
import CounterController from "./CounterController";
import { store } from "./store";
import { Provider } from "react-redux";

const AppEx8 = () => {
  return (
    <Provider store={store}>
      <Counter />
      <CounterController />
    </Provider>
  )
}

export default AppEx8;