import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Card, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star'
import { STYLES } from "./styles";
import MovieImg from "../movie_img";
import { setUser } from "../../slices/user_slice";
import {
  toggleFavoriteMovie,
  setFavoriteMovies,
} from "../../slices/movies_slice";
import {postFavoriteMovie} from "../../api/post_favotite_movie"

const MovieCard = ({ movie, isFavorite }) => {
  const [isMovieFavorite, setIsMovieFavorite] = useState(isFavorite);
  const accountId = useSelector((state) => state.user.accountId);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);
  const dispatch = useDispatch();

  async function handleFavoriteClick() {
    if (!isAuthenticated) {
      dispatch(setUser({ isAuthenticated: false }));
      return;
    }

    const updatedFavoriteValue = !isMovieFavorite;
    dispatch(toggleFavoriteMovie(movie.id));

    try {
      const response = await postFavoriteMovie(
        accountId,
        movie.id,
        updatedFavoriteValue
      );
      if (response.success) {
        if (updatedFavoriteValue) {
          if (!favoriteMovies.includes(movie.id)) {
            dispatch(setFavoriteMovies([...favoriteMovies, movie.id]));
          }
        } else {
          const updatedFavoriteMovies = favoriteMovies.filter(
            (movieId) => movieId !== movie.id
          );
          dispatch(setFavoriteMovies(updatedFavoriteMovies));
        }
        setIsMovieFavorite(updatedFavoriteValue);
      } else {
        setIsMovieFavorite(!updatedFavoriteValue);
      }
    } catch (error) {
      console.error(error);
      setIsMovieFavorite(!updatedFavoriteValue);
    }
  }

  return (
    <Card sx={STYLES.CARD}>
      <MovieImg poster={movie.poster_path} />
      <CardContent
        sx={{
          ...STYLES.CONTENT,
          "&:last-child": {
            paddingBottom: "10px",
          },
        }}
      >
        <Typography color="text.primary" sx={STYLES.TEXT_TITLE}>
          {movie.title}
        </Typography>
        <Typography sx={STYLES.TEXT_RATING}>
          Рейтинг {movie.vote_average}
        </Typography>
      </CardContent>
      <CardActions sx={STYLES.CARD_ACTIONS}>
        <IconButton onClick={handleFavoriteClick}>
          {isMovieFavorite ? (
            <StarIcon
              sx={{
                width: 30,
                height: 30,
                transition: "color 0.5s ease",
                color: "orange",
              }}
            />
          ) : (
            <StarBorderIcon
              sx={{
                width: 30,
                height: 30,
                color: "white",
                transition: "color 0.5s ease",
                "&:hover": { color: "orange" },
              }}
            />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default MovieCard;
