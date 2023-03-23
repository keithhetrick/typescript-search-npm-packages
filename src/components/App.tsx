import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList"

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h1>NPM API</h1>
        <h2>Search For a Package</h2>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
