import { useContext, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton } from "@mui/material";
import { ColorThemeContext } from "../../theme/toggle_theme";
import { searchMovie, setSearchMovie } from "../../slices/movies_slice";

const MovieSearchInput = () => {
  const [searchTimeout, setSearchTimeout] = useState(null);
  const { theme } = useContext(ColorThemeContext);
  const dispatch = useDispatch();

  const handleSearchChange = useCallback(
    (event) => {
      clearTimeout(searchTimeout);

      const text = event.target.value;
      dispatch(setSearchMovie({ search: text }));

      const newTimeout = setTimeout(() => {
        dispatch(searchMovie(text));
      }, 300);

      setSearchTimeout(newTimeout);
    },
    [dispatch, searchTimeout]
  );

  return (
    <Box sx={{ display: "flex", alignItems: "center" }} p={2}>
      <TextField
        label="Название фильма"
        onChange={handleSearchChange}
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton edge="end">
              <SearchIcon />
            </IconButton>
          ),
          style: { color: theme.palette.text.secondary },
        }}
      />
    </Box>
  );
}

export default MovieSearchInput;
