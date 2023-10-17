import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <CardMedia>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      </CardMedia>
      <CardContent>
        <Typography>{movie.title}</Typography>
        <Typography>рейтинг {movie.rating}</Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;