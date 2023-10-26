import { createTheme } from "@mui/material/styles";

const themeDark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0c0e10",
    },
    secondary: {
      main: "#c28dea",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
      default: "#FFFFFF",
    },
    background: {
      paper: "#0c0e10",
      default: "#0c0e10",
      custom: "#b388ff",
    },
  },
});

export { themeDark };