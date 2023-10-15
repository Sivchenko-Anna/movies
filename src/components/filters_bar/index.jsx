import { useDispatch } from "react-redux";
import { resetFilters } from "../../slices/movies_slice";
import { Box, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

const FiltersBar = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetFilters());
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      p={2}
    >
      <Typography variant="h5" component="h5" color="text.secondary">
        Фильтры
      </Typography>
      <IconButton onClick={handleReset}>
        <Close />
      </IconButton>
    </Box>
  );
}

export default FiltersBar;
