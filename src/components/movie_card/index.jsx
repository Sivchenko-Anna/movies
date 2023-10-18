import PropTypes from "prop-types";
import { Card, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star'
import { STYLES } from "./styles";
import MovieImg from "../movie_img";
import { useState } from "react";

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleChange = () => {
    setIsFavorite(!isFavorite);
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
        <IconButton onClick={handleChange}>
          {isFavorite ? (
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
};

export default MovieCard;
