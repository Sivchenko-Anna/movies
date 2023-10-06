import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { themeLight } from "./theme/theme_light";
import { themeDark } from "./theme/theme_dark";
import { Provider } from "react-redux";
import store from "./store.js";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/header/index.jsx";

function getTheme(theme) {
  return theme === "light" ? themeLight : themeDark;
}

function App() {
  const [theme, setTheme] = useState("light");
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <ThemeProvider theme={getTheme(theme)}>
      <Provider store={store}>
        <CssBaseline />
        <Header onToggleTheme={toggleTheme} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
