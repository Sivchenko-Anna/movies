import { Box } from "@mui/material";
import { useEffect } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

const MoviesCatalog = () => {
  const option = useSelector((state) => state.movies.selectedOption);
  const years = useSelector((state) => state.movies.selectedYears);
  const genres = useSelector((state) => state.movies.selectedGenres);
  const page = useSelector((state) => state.movies.currentPage);
  const moviesCatalog = useSelector((state) => state.movies.moviesCatalog);
  const dispatch = useDispatch();

  const loadMoviesData = useCallback(async () => {
    try {
      const [firstYear, secondYear] = years;
      const fromYear = `${firstYear}-01-01`;
      const toYear = `${secondYear}-12-31`;
      const genresList = genres.map((item) => item.id).join(",");
      const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ru&page=${page}&primary_release_date.gte=${fromYear}&primary_release_date.lte=${toYear}&sort_by=${option}.desc&with_genres=${genresList}&vote_count.gte=300`;
      dispatch(fetchMoviesData(url));
    } catch (error) {
      console.error(error);
    }
  }, [option, years, genres, page, dispatch]);

  useEffect(() => {
    loadMoviesData();
  }, [loadMoviesData]);

  const renderedMovies = useMemo(
    () =>
      moviesCatalog?.map((movie) => <MovieCard key={movie.id} film={movie} />),
    [moviesCatalog]
  );

  return <Box sx={{ display: "flex", flexWrap: "wrap" }}>{renderedMovies}</Box>;
};

export default MoviesCatalog;
