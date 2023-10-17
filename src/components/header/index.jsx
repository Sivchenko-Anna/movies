import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/Person";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { showModal } from "../../slices/modal_slice.js";
import { ColorThemeContext } from "../../theme/toggle_theme.jsx";
import ModalAuthorization from "../modal/index.jsx";

const Header = () => {
  const dispatch = useDispatch();
  const { toggleColorMode, theme } = useContext(ColorThemeContext);

  const handleModal = () => dispatch(showModal({ isModalOpen: true }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: theme.palette.text.primary }}
          >
            Movies
          </Typography>
          <IconButton onClick={toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          <IconButton onClick={handleModal}>
            <AccountCircleIcon
              fontSize="inherit"
              sx={{ color: theme.palette.text.primary }}
            />
          </IconButton>
          <ModalAuthorization/>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
