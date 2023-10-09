import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Dialog, Box } from "@mui/material";
import { getUserId } from "../../slices/user_slice";
import { style } from "./style";

ModalAuthorization.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

const ModalAuthorization = ({ open, handleClose }) => {
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
      // return <ModalEmail />;
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
    <Dialog open={open} onClose={handleClose} fullWidth={true}>
      <Box sx={style}>{handleAuth()}</Box>
    </Dialog>
  );
};

export default ModalAuthorization;
