import { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/user_slice";
import Grid from "@mui/material/Grid";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { alpha } from "@mui/system";
import { ColorThemeContext } from "../../theme/toggle_theme";

const ModalEmail = () => {
  const { theme } = useContext(ColorThemeContext);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSaveEmail = (event) => {
    event.preventDefault();
    dispatch(setUser({ email: email }));
  };

  const handleChange = (event) => {
    const actualEmail = event.target.value;
    setEmail(actualEmail);
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <DialogTitle sx={{ mx: "auto" }}>Запросить токен</DialogTitle>
      </Grid>
      <Grid item>
        <DialogContent
          sx={{ mx: "auto" }}
          component="form"
          onSubmit={handleSaveEmail}
        >
          <TextField
            autoFocus
            label="Введите email"
            type="email"
            id="email"
            variant="standard"
            fullWidth
            onChange={handleChange}
            color="secondary"
            inputProps={{ style: { color: theme.palette.text.secondary } }}
          />
          <DialogActions>
            <Button
              type="submit"
              disabled={!email}
              sx={{
                marginTop: "18px",
                mx: "auto",
                backgroundColor: theme.palette.background.custom,
                color: theme.palette.text.primary,
                "&:hover": {
                  backgroundColor: (theme) =>
                    alpha(theme.palette.background.custom, 0.8),
                },
              }}
            >
              Запросить
            </Button>
          </DialogActions>
        </DialogContent>
      </Grid>
    </Grid>
  );
};

export default ModalEmail;
