import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, DialogActions, DialogTitle, Grid } from "@mui/material";
import { alpha } from "@mui/system";
import { ColorThemeContext } from "../../theme/toggle_theme";
import { showModal } from "../../slices/modal_slice";

const ModalUser = () => {
  const { theme } = useContext(ColorThemeContext);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showModal({ isModalOpen: false }));
  };

  return (
    <Grid container direction="column" p={2}>
      <Grid item>
        <DialogTitle sx={{ textAlign: "center" }}>
          Вы успешно авторизованы!
        </DialogTitle>
      </Grid>
      <Grid item sx={{ alignSelf: "center" }}>
        <DialogActions sx={{ mx: "auto" }}>
          <Link to={`profile/`}>
            <Button
              onClick={handleClick}
              sx={{
                mx: "auto",
                backgroundColor: theme.palette.background.custom,
                color: theme.palette.text.primary,
                "&:hover": {
                  backgroundColor: (theme) =>
                    alpha(theme.palette.background.custom, 0.8),
                },
              }}
            >
              Перейти на страницу пользователя
            </Button>
          </Link>
        </DialogActions>
      </Grid>
    </Grid>
  );
};

export default ModalUser;
