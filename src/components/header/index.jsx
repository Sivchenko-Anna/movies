import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/Person";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { openModal, closeModal } from "../../slices/modal_slice.js";
import { ColorThemeContext } from "../../theme/toggle_theme.jsx";

const Header = () => {
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const dispatch = useDispatch();
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorThemeContext);

  function handleModal() {
    if (isModalOpen) {
      dispatch(closeModal());
    } else {
      dispatch(openModal());
    }
  }

  return (
    <Box sx={{ flexGrow: 1, bgcolor: theme.palette.background.paper }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: theme.palette.secondary.main }}
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
            <AccountCircleIcon fontSize="inherit" sx={{ color: "#0c0e10" }} />
          </IconButton>
          {/* {isModalOpen && (
            <ModalAuthorization open={isModalOpen} handleClose={handleModal} />
          )} */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
