import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@mui/material";
import { STYLES } from "./styles";
import MovieImg from "../movie_img";

const MovieCard = ({ movie }) => {
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
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
