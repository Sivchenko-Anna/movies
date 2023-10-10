import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Dialog } from "@mui/material";
import { getUserId } from "../../slices/user_slice";
import { ColorThemeContext } from "../../theme/toggle_theme";
import ModalEmail from "../modal_email";

const ModalAuthorization = ({ open, handleClose }) => {
  const { theme } = useContext(ColorThemeContext);
  const {
    email: userEmail,
    token: userToken,
    isAuthenticated: isUserAuth,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAuthComplete = async () => {
      if (userToken) {
        dispatch(getUserId());
      }
    };
    if (userToken) {
      fetchAuthComplete();
    }
  }, [dispatch, userToken]);

  const handleAuth = () => {
    if (!userEmail) {
      return <ModalEmail />;
    }
    if (!userToken) {
      // return <ModalToken />;
    }
    if (isUserAuth) {
      // return <ModalUser />;
    }
    return null;
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={true}
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "20px",
          boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.25)",
          color: theme.palette.text.secondary,
        },
      }}
    >
      {handleAuth()}
    </Dialog>
  );
};

ModalAuthorization.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ModalAuthorization;
