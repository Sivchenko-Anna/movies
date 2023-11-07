import { createTheme } from "@mui/material/styles";

const themeLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5e35b1",
    },
    secondary: {
      main: "#c28dea",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#5e35b1",
      default: "#000000",
      message: "#FFFFFF",
    },
    background: {
      paper: "#FFFFFF",
      default: "#FFFFFF",
      custom: "#6e49b8",
      message: "#b388ff",
    },
  },
});

export { themeLight };
