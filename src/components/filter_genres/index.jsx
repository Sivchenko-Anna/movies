import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Box, TextField, Checkbox } from "@mui/material";
import { ColorThemeContext } from "../../theme/toggle_theme";
import { setActiveGenres, fetchGenres } from "../../slices/movies_slice";

const SortByGenres = () => {
  const { theme } = useContext(ColorThemeContext);
  const genres = useSelector((state) => state.movies.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const handleChange = (event, selectGenres) => {
    dispatch(setActiveGenres(selectGenres));
  };

  return (
    <Box sx={{ height: "170px", overflowY: "auto", overflowX: "hidden" }}>
      <Autocomplete
        size="small"
        multiple
        disableCloseOnSelect
        options={genres}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField {...params} variant="standard" label="Жанры" />
        )}
        renderOption={(props, option, { selected }) => (
          <li {...props} style={{ color: theme.palette.text.secondary }}>
            <Checkbox
              size="small"
              checked={selected}
              style={{ color: theme.palette.text.secondary }}
            />
            {option.name}
          </li>
        )}
        onChange={handleChange}
        sx={{
          "& .MuiChip-label": {
            color: theme.palette.text.primary,
          },
          "& .MuiChip-root": {
            bgcolor: theme.palette.background.custom,
          },
        }}
      />
    </Box>
  );
};

export default SortByGenres;
