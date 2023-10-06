import { Provider } from "react-redux";
import store from "./store.js";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/header/index.jsx";
import ToggleTheme from "./theme/toggle_theme";

function App() {
  return (
    <ToggleTheme>
      <Provider store={store}>
        <CssBaseline />
        <Header />
      </Provider>
    </ToggleTheme>
  );
}

export default App;
