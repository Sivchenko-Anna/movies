import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import MovieCard from "../movie_card";
import { favoriteListSelector } from "../../slices/movies_slice";

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
    <Box>
      <Paper elevation={4}>
        <Box>
          <Typography variant="h6" color="text.secondary">
            Профиль
          </Typography>
          <Typography>Логин: {login}</Typography>
          <Typography>Почта: {email}</Typography>
          <Typography>ID: {id}</Typography>
        </Box>
      </Paper>
      <Box>
        <Typography variant="h5">Избранное</Typography>
        <Box>{renderedFavoriteMovies}</Box>
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
