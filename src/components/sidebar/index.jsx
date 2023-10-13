import { Box, Paper } from "@mui/material";
import MovieSearchInput from "../search_movie";
import PaginationMovies from "../pagination";

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
          padding: "10px 0",
        }}
      >
        <MovieSearchInput />
        <PaginationMovies />
      </Paper>
    </Box>
  );
};

export default Sidebar;
