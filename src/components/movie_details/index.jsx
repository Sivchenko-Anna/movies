import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, IconButton, Typography } from "@mui/material";
import { useLoaderData, Link } from "react-router-dom";

const MovieDetails = () => {
  const { info } = useLoaderData();

  const data = {
    poster: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${info.poster_path}`,
    country: info.production_countries[0].name,
    genres: info.genres.map((genre) => genre.name).join(", "),
    runtime: `${info.runtime} мин`,
  };

  return (
    <Box>
      <Box>
        <img src={data.poster} alt={info.title} />
      </Box>
      <Box>
        <Box>
          <Typography variant="h3">{info.title}</Typography>
        </Box>
        <Link to="/">
          <IconButton>
            <ArrowBackIcon
              style={{
                width: "35px",
                height: "35px",
              }}
            />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default MovieDetails;