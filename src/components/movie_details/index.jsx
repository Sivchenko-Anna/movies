import { Close } from "@mui/icons-material";
import {
  Box,
  IconButton,
  TableContainer,
  Typography,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getMoviesInfo } from "../../api/get_movies_info";
import { API } from "../../api/variables";
import { getNames } from "../../utils/get_names";

const MovieDetails = () => {
  const { credits, info } = useLoaderData();

  const navigate = useNavigate();
  const goBack = () => navigate("/");

  const data = {
    poster: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${info.poster_path}`,
    country: info.production_countries[0].name,
    year: new Date(info.release_date).getFullYear(),
    genres: info.genres.map((genre) => genre.name).join(", "),
    runtime: `${info.runtime} мин`,
    budget: `$ ${info.budget.toLocaleString()}`,
    revenue: `$ ${info.revenue.toLocaleString()}`,
  };
  const actors = getNames(credits.cast, "known_for_department", "Acting");
  const directors = getNames(credits.cast, "job", "Directing");
  const writers = getNames(credits.cast, "job", "Writing");

  return (
    <Box>
      <Box>
        <img src={data.poster} alt={info.title} />
      </Box>
      <Box>
        <Box>
          <Typography variant="h4">{info.title}</Typography>
        </Box>
        <Box>
          <Typography variant="h5">Актеры:</Typography>
          <br></br>
          {actors}
        </Box>
        <Box>
          <Typography variant="h5">Детали:</Typography>
          <TableContainer component="table">
            <TableBody>
              <TableRow>
                <TableCell>Страна</TableCell>
                <TableCell align="right">
                  {data.country}
                </TableCell>
              </TableRow>
            </TableBody>
          </TableContainer>
        </Box>
      </Box>
      <Box>
        <IconButton onClick={goBack}>
          <Close />
        </IconButton>
      </Box>
    </Box>
  );
};

export const loader = async ({ params }) => {
  const info = await getMoviesInfo(API.LINKS.INFO, params.movieId);
  const credits = await getMoviesInfo(API.LINKS.CREDITS, params.movieId);

  return { info, credits };
};

export default MovieDetails;
