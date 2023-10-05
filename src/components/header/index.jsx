import { useSelector, useDispatch } from "react-redux";
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/Person";
import {openModal, closeModal} from "../../slices/modal_slice.js"

const Header = () => {
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const dispatch = useDispatch();

  function handleModal() {
    if (isModalOpen) {
      dispatch(closeModal());
    } else {
      dispatch(openModal());
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movies
          </Typography>
          <IconButton onClick={handleModal}>
            <AccountCircleIcon fontSize="inherit" sx={{ color: "#fff" }} />
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
