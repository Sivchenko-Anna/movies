import { Box, Paper } from "@mui/material";
import PaginationMovies from "../pagination";
import Filters from "../filters";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "20%",
        minWidth: "220px",
        maxHeight: "520px",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          borderRadius: "10px",
        }}
      >
        <Filters/>
        <PaginationMovies />
      </Paper>
    </Box>
  );
};

export default Sidebar;
