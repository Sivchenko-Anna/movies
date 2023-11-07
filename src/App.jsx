import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/header/index.jsx";
import ToggleTheme from "./theme/toggle_theme";
import Main from "./components/main/index.jsx";
import AuthorizationMessage from "./components/authorization_message/index.jsx";
import Loading from "./components/loading/index.jsx";

function App() {
  const isUserAuthorize = useSelector((state) => state.user.isAuthenticated);
  const content = isUserAuthorize ? <Outlet /> : <AuthorizationMessage/>;
  return (
      <ToggleTheme>
        <CssBaseline />
        <Header />
        <Loading>
          <Main>{content}</Main>
        </Loading>
      </ToggleTheme>
  );
}

export default App;
