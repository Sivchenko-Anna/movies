import { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/user_slice";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { alpha } from "@mui/system";
import { ColorThemeContext } from "../../theme/toggle_theme";
import { showModal } from "../../slices/modal_slice";

const ModalToken = () => {
  const { theme } = useContext(ColorThemeContext);
  const [token, setToken] = useState("");
  const dispatch = useDispatch();

  const handleSaveToken = (event) => {
    event.preventDefault();
    dispatch(setUser({ token: token }));
    dispatch(showModal({ isModalOpen: false }));
  };

  const handleChange = (event) => {
    const actualToken = event.target.value;
    setToken(actualToken);
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <DialogTitle sx={{ mx: "auto" }}>Введите токен</DialogTitle>
      </Grid>
      <Grid item>
        <Box component="form" onSubmit={handleSaveToken}>
          <DialogContent sx={{ mx: "auto" }}>
            <TextField
              autoFocus
              label="Введите token"
              type="text"
              id="token"
              variant="standard"
              fullWidth
              onChange={handleChange}
              color="secondary"
              inputProps={{ style: { color: theme.palette.text.secondary } }}
            />
            <DialogActions>
              <Button
                type="submit"
                disabled={!token}
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
                Проверить
              </Button>
            </DialogActions>
          </DialogContent>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ModalToken;
