import { Provider } from "react-redux";
import store from "./store.js";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/header/index.jsx";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Header/>
    </Provider>
  );
}

export default App;
