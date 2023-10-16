import { Box } from "@mui/material";
import FiltersBar from "../filters_bar";
import MovieSearchInput from "../search_movie";
import SortByOption from "../filter_sorting";
import SortByYears from "../filter_years";

const Filters = () => {
  return (
    <Box>
      <FiltersBar />
      <MovieSearchInput />
      <SortByOption />
      <SortByYears/>
    </Box>
  );
};

export default Filters;
