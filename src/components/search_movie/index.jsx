import { useContext, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton } from "@mui/material";
import { ColorThemeContext } from "../../theme/toggle_theme";
import { setSearchMovie, searchMovie } from "../../slices/movies_slice";

const MovieSearchInput = () => {
  const { theme } = useContext(ColorThemeContext);
  const search = useSelector((state) => state.movies.search);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(setSearchMovie(event.target.value));
  };

  const handleSearch = useCallback(
    (event) => {
      dispatch(searchMovie(search));
      dispatch(setSearchMovie(""));
      event.preventDefault();
    },
    [dispatch, search]
  );

  return (
    <Box sx={{ display: "flex", alignItems: "center" }} pt={2}>
      <TextField
        label="Название фильма"
        value={search}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch(e);
          }
        }}
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleSearch} edge="end">
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
