import { createTheme } from "@mui/material/styles";

const themeLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6200EE",
    },
    secondary: {
      main: "#03DAC6",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F5F5",
    },
  },
});

export { themeLight };
