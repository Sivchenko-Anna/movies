import { Box } from "@mui/material";
import Sidebar from "../sidebar";

const MoviesPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        alignItems: "flex-start",
      }}
      p={1}
    >
      <Sidebar />
    </Box>
  );
};

export default MoviesPage;
