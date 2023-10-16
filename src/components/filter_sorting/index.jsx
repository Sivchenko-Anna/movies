import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ListItemText,
} from "@mui/material";
import { ColorThemeContext } from "../../theme/toggle_theme";
import { setActiveOption } from "../../slices/movies_slice";

const SortByOption = () => {
  const { theme } = useContext(ColorThemeContext);
  const selectedOption = useSelector((state) => state.movies.selectedOption);
  const options = useSelector((state) => state.movies.options);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setActiveOption(e.target.value));
    window.scrollTo(0, 0);
  };
  return (
    <Box pt={3}>
      <FormControl variant="standard" fullWidth>
        <InputLabel variant="standard" htmlFor="sort-option">
          Сортировать по:
        </InputLabel>
        <Select
          labelId="sort-option"
          defaultValue="Популярности"
          value={selectedOption}
          id="sort-option"
          onChange={handleChange}
          sx={{
            "& .MuiSelect-select": {
              color: theme.palette.text.secondary,
            },
          }}
        >
          {options.map((el) => (
            <MenuItem key={el.id} value={el.value}>
              <ListItemText
                primary={el.label}
                sx={{ color: theme.palette.text.secondary }}
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SortByOption;
