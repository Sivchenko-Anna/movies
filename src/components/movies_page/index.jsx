import { Box } from "@mui/material";
import Sidebar from "../sidebar";
import MoviesCatalog from "../movies_catalog";

const MoviesPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        alignItems: "flex-start",
      }}
      p={1}
    >
      <Sidebar />
      <MoviesCatalog />
    </Box>
  );
};

export default MoviesPage;
