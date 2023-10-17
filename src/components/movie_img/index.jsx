import PropTypes from "prop-types";
import { CardMedia } from "@mui/material";

const MovieImg = ({ poster }) => {
  return (
    <CardMedia
      sx={{
        height: "400px",
        backgroundPosition: "center",
        transition: "transform 1s ease, filter 1s ease",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      {poster ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <img
          src="/no_poster.png"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
    </CardMedia>
  );
};

MovieImg.propTypes = {
  poster: PropTypes.string,
};

export default MovieImg;
