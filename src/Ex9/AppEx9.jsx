import Main from "./Main";
import { store } from "./../store";
import { Provider } from "react-redux";

const AppEx9 = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default AppEx9;