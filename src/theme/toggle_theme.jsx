import { useState, useMemo, createContext } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import { themeLight } from "./theme_light";
import { themeDark } from "./theme_dark";

export const ColorThemeContext = createContext({ toggleColorMode: () => {} });

ToggleTheme.propTypes = {
  children: PropTypes.node.isRequired,
};

function ToggleTheme({ children }) {
  const [theme, setTheme] = useState("light");

  const actualTheme = useMemo(
    () => (theme === "light" ? themeLight : themeDark),
    [theme]
  );
  
  const colorTheme = useMemo(
    () => ({
      toggleColorMode: () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      },
      theme: actualTheme,
    }),
    [actualTheme]
  );

  return (
    <ColorThemeContext.Provider value={colorTheme}>
      <ThemeProvider theme={actualTheme}>{children}</ThemeProvider>
    </ColorThemeContext.Provider>
  );
}
export default ToggleTheme;
