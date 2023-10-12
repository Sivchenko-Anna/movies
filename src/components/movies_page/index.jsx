import { Grid } from "@mui/material";

const MoviesPage = () => {
  return (
    <Grid
      container
      columns={{ xs: 12, sm: 4 }}
      columnSpacing={2}
      alignItems="flex-start"
    >
      <Grid item>{/* <Sidebar /> */}</Grid>
      <Grid item>{/* <MoviesCatalog /> */}</Grid>
    </Grid>
  );
};

export default MoviesPage;
