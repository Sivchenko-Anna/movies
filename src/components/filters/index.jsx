import { Box } from "@mui/material";
import FiltersBar from "../filters_bar";
import MovieSearchInput from "../search_movie";
import SortByOption from "../filter_sorting";
import SortByYears from "../filter_years";
import SortByGenres from "../filter_genres";

const Filters = () => {
  return (
    <Box p={2} pb={1}>
      <FiltersBar />
      <MovieSearchInput />
      <SortByOption />
      <SortByYears/>
      <SortByGenres/>
    </Box>
  );
};

export default Filters;
