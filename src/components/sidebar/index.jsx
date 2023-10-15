import { Box, Paper } from "@mui/material";
import MovieSearchInput from "../search_movie";
import PaginationMovies from "../pagination";
import FiltersBar from "../filters_bar";
import SortByOption from "../filter_sorting";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "20%",
        maxHeight: "520px",
      }}
    >
      <Paper
        elevation={4}
      >
        <FiltersBar/>
        <MovieSearchInput />
        <SortByOption/>
        <PaginationMovies />
      </Paper>
    </Box>
  );
};

export default Sidebar;
