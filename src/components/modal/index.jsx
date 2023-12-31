import React from "react";
import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dialog, Slide } from "@mui/material";
import { getUserId } from "../../slices/user_slice";
import { ColorThemeContext } from "../../theme/toggle_theme";
import { showModal } from "../../slices/modal_slice";
import ModalEmail from "../modal_email";
import ModalToken from "../modal_token";
import ModalUser from "../modal_user";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalAuthorization = () => {
  const { theme } = useContext(ColorThemeContext);
  const {
    email: userEmail,
    token: userToken,
    isAuthenticated: isUserAuth,
  } = useSelector((state) => state.user);
  const open = useSelector((state) => state.modal.isModalOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userToken) {
      dispatch(getUserId());
    }
  }, [dispatch, userToken]);

  const handleCloseModal = () => {
    dispatch(showModal({ isModalOpen: false }));
  };

  const handleAuth = () => {
    if (!userEmail) {
      return <ModalEmail />;
    }
    if (!userToken) {
      return <ModalToken />;
    }
    if (isUserAuth) {
      return <ModalUser />;
    }
    return null;
  };

  return (
    <Dialog
      open={open}
      onClose={handleCloseModal}
      TransitionComponent={Transition}
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

export default ModalAuthorization;
