import { useContext } from "react";
import { Button, DialogActions, DialogTitle, Grid } from "@mui/material";
import { alpha } from "@mui/system";
import { ColorThemeContext } from "../../theme/toggle_theme";

const ModalUser = () => {
  const { theme } = useContext(ColorThemeContext);

  const handleClick = () => {
    console.log("Go to profile");
  };

  return (
    <Grid container direction="column" p={2}>
      <Grid item>
        <DialogTitle sx={{ textAlign: "center" }}>
          Вы успешно авторизованы!
        </DialogTitle>
      </Grid>
      <Grid item >
        <DialogActions sx={{ mx: "auto" }} >
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
          {/* <Link to={`profile/`} onClick={handleCloseModal}>
            Перейти на страницу пользователя
          </Link> */}
        </DialogActions>
      </Grid>
    </Grid>
  );
};

export default ModalUser;
