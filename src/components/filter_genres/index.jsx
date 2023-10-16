import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Box, TextField, Checkbox } from "@mui/material";
import { setActiveGenres, fetchGenres } from "../../slices/movies_slice";

const SortByGenres = () => {
  const genres = useSelector((state) => state.movies.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const handleChange = (event, selectGenres) => {
    dispatch(setActiveGenres(selectGenres));
  };

  return (
    <Box p={2}>
      <Autocomplete
        size="small"
        multiple
        limitTags={4}
        disableCloseOnSelect
        options={genres}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField {...params} variant="standard" label="Жанры" />
        )}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox size="small" checked={selected} />
            {option.name}
          </li>
        )}
        onChange={handleChange}
      />
    </Box>
  );
};

export default SortByGenres;
