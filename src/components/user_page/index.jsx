import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import MovieCard from "../movie_card";
import { favoriteListSelector } from "../../slices/movies_slice";
import { STYLES } from "./styles";

const UserPage = () => {
  const {
    accountId: id,
    login: login,
    email: email,
  } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const goBack = () => navigate("/");

  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);
  const moviesCatalog = useSelector((state) => state.movies.moviesCatalog);
  const favoriteList = useSelector(favoriteListSelector);

  const renderedFavoriteMovies = favoriteMovies.map((movieId) => {
    const movie = moviesCatalog.find((m) => m.id === movieId);
    if (movie) {
      return (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favoriteList.has(movie.id)}
        />
      );
    }
    return null;
  });

  return (
    <Box sx={STYLES.BOX} p={1}>
      <Paper
        elevation={4}
        // sx={{
        //   borderRadius: "10px",
        //   marginTop: "10px",
        // }}
        sx={STYLES.PAPER}
      >
        <Box sx={STYLES.PROFILE}>
          <Typography variant="h5" color="text.secondary" sx={STYLES.TITLE}>
            Профиль
          </Typography>
          <Typography color="text.default">Логин: {login}</Typography>
          <Typography color="text.default">Почта: {email}</Typography>
          <Typography color="text.default">ID: {id}</Typography>
        </Box>
      </Paper>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h5" color="text.default" sx={STYLES.TITLE}>
          Избранное
        </Typography>
        <Box sx={STYLES.CATALOG}>{renderedFavoriteMovies}</Box>
      </Box>
      <Box>
        <IconButton onClick={goBack}>
          <Close />
        </IconButton>
      </Box>
    </Box>
  );
};

export default UserPage;
