import { Box } from "@mui/material";
import FiltersBar from "../filters_bar";
import MovieSearchInput from "../search_movie";
import SortByOption from "../filter_sorting";

const Filters = () => {
  return (
    <Box>
      <FiltersBar />
      <MovieSearchInput />
      <SortByOption />
    </Box>
  );
};

export default Filters;
