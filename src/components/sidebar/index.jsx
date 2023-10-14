import { Box, Paper } from "@mui/material";
import MovieSearchInput from "../search_movie";
import PaginationMovies from "../pagination";
import FiltersBar from "../filters_bar";

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
        sx={{
          paddingBottom: "15px",
        }}
      >
        <FiltersBar/>
        <MovieSearchInput />
        <PaginationMovies />
      </Paper>
    </Box>
  );
};

export default Sidebar;
