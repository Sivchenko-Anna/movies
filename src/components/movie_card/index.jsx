import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { STYLES } from "./styles";

const MovieCard = ({ movie }) => {
  return (
    <Card sx={STYLES.CARD}>
      <CardMedia>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      </CardMedia>
      <CardContent sx={STYLES.CONTENT}>
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

export default MovieCard;
