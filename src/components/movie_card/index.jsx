import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  Snackbar,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { STYLES } from "./styles";
import MovieImg from "../movie_img";
import { setUser } from "../../slices/user_slice";
import {
  toggleFavoriteMovie,
  setFavoriteMovies,
} from "../../slices/movies_slice";
import { postFavoriteMovie } from "../../api/post_favotite_movie";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, isFavorite }) => {
  const accountId = useSelector((state) => state.user.accountId);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);
  const dispatch = useDispatch();
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  async function handleFavoriteClick() {
    if (!isAuthenticated) {
      dispatch(setUser({ isAuthenticated: false }));
      return;
    }

    const updatedFavoriteValue = !isFavorite;
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
            setNotificationMessage("Фильм добавлен в избранное");
            setShowNotification(true);
          }
        } else {
          const updatedFavoriteMovies = favoriteMovies.filter(
            (movieId) => movieId !== movie.id
          );
          dispatch(setFavoriteMovies(updatedFavoriteMovies));
          setNotificationMessage("Фильм удалён из избранного");
          setShowNotification(true);
        }
      } else {
        setNotificationMessage("Ошибка при обновлении избранных фильмов.");
        setShowNotification(true);
      }
    } catch (error) {
      console.error(error);
      setNotificationMessage("Ошибка при выполнении запроса.");
      setShowNotification(true);
    }
  }

  const renderFavoriteIcon = () => {
    if (isFavorite) {
      return (
        <StarIcon
          sx={{
            width: 30,
            height: 30,
            transition: "color 0.5s ease",
            color: "orange",
          }}
        />
      );
    } else {
      return (
        <StarBorderIcon
          sx={{
            width: 30,
            height: 30,
            color: "white",
            transition: "color 0.5s ease",
            "&:hover": { color: "orange" },
          }}
        />
      );
    }
  };

  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  return (
    <>
      <Card sx={STYLES.CARD}>
        <Link to={`movie/${movie.id}`}>
          <MovieImg poster={movie.poster_path} />
        </Link>
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
            {renderFavoriteIcon()}
          </IconButton>
        </CardActions>
      </Card>
      <Snackbar
        open={showNotification}
        autoHideDuration={2000}
        onClose={handleNotificationClose}
        message={notificationMessage}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-message": {
            color: "text.message",
            textAlign: "center",
            width: "100%",
          },
          "& .MuiSnackbarContent-root": {
            bgcolor: "background.message",
          },
        }}
      />
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default MovieCard;
