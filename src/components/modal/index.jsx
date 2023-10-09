import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dialog, Box } from "@mui/material";
import { getUserId } from "../../slices/user_slice";
import { style } from "./style";

const ModalAuthorization = ({ open, handleClose }) => {
  const {
    email: userEmail,
    token: userToken,
    isAuth: isUserAuth,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAuthComplete = async () => {
      if (userToken) {
        dispatch(getUserId());
      }
    };
    fetchAuthComplete();
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
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true}>
      <Box sx={style}>{handleAuth()}</Box>
    </Dialog>
  );
};

export default ModalAuthorization;
