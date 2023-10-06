import { useState, useMemo, createContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeLight } from "./theme_light";
import { themeDark } from "./theme_dark";

export const ColorThemeContext = createContext({ toggleColorMode: () => {} });

function ToggleTheme({ children }) {
  const [theme, setTheme] = useState("light");

  const colorTheme = useMemo(
    () => ({
      toggleColorMode: () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const actualTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
          ...(theme === "light" ? themeLight : themeDark),
        },
      }),
    [theme]
  );

  return (
    <ColorThemeContext.Provider value={colorTheme}>
      <ThemeProvider theme={actualTheme}>{children}</ThemeProvider>
    </ColorThemeContext.Provider>
  );
}
export default ToggleTheme;
