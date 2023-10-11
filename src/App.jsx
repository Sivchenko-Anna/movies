import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/header/index.jsx";
import ToggleTheme from "./theme/toggle_theme";
import Main from "./components/main/index.jsx";

function App() {
  const isUserAuthorize = useSelector((state) => state.user.isAuthenticated);
  const content = isUserAuthorize ? <Outlet /> : null;
  return (
      <ToggleTheme>
        <CssBaseline />
        <Header />
        <Main>{content}</Main>
      </ToggleTheme>
  );
}

export default App;
