import { Close } from "@mui/icons-material";
import {
  Box,
  IconButton,
  TableContainer,
  Typography,
  TableBody
} from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getNames } from "../../utils/get_names";
import MovieDetailsTable from "../movie_details_table";

const MovieDetails = () => {
  const { info, credits } = useLoaderData();

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
  const directors = getNames(credits.cast, "known_for_department", "Directing");
  const producer = getNames(credits.cast, "known_for_department", "Production");

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
              <MovieDetailsTable title="Страна" data={data.country} />
              <MovieDetailsTable title="Год" data={data.year} />
              <MovieDetailsTable title="Жанры" data={data.genres} />
              <MovieDetailsTable title="Длительность" data={data.runtime} />
              <MovieDetailsTable title="Бюджет" data={data.budget} />
              <MovieDetailsTable title="Доход" data={data.revenue} />
              <MovieDetailsTable title="Режиссер" data={directors} />
              <MovieDetailsTable title="Продюсер" data={producer} />
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

export default MovieDetails;
