import { useDispatch, useSelector } from "react-redux";
import { Box, Slider, Typography } from "@mui/material";
import { setActiveYears } from "../../slices/movies_slice";
import { getCurrentYear } from "../../utils/get_current_year";

const SortByYears = () => {
  const years = useSelector((state) => state.movies.selectedYears);
  const dispatch = useDispatch();
  const currentYear = getCurrentYear();

  const handleChange = (event, years) => {
    dispatch(setActiveYears(years));
  };

  return (
    <Box pt={3}>
      <Typography color="text.secondary">Год релиза:</Typography>
      <Slider
        size="small"
        marks
        min={1960}
        max={currentYear}
        step={5}
        valueLabelDisplay="auto"
        value={years}
        onChange={handleChange}
        color="secondary"
      />
    </Box>
  );
}

export default SortByYears;