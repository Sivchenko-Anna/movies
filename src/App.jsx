import { Provider } from "react-redux";
import store from "./store.js";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/header/index.jsx";
import ToggleTheme from "./theme/toggle_theme";

function App() {
  return (
    <Provider store={store}>
      <ToggleTheme>
        <CssBaseline />
        <Header />
      </ToggleTheme>
    </Provider>
  );
}

export default App;
