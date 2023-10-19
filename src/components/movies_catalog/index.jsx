import { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { createUrl } from "../../utils/create_url";
import {
  fetchMoviesData,
  favoriteListSelector,
  fetchFavoriteMovies,
} from "../../slices/movies_slice";
import { setUser } from "../../slices/user_slice";
import MovieCard from "../movie_card";

const MoviesCatalog = () => {
  const accountId = useSelector((state) => state.user.accountId);
  const option = useSelector((state) => state.movies.selectedOption);
  const years = useSelector((state) => state.movies.selectedYears);
  const genres = useSelector((state) => state.movies.selectedGenres);
  const page = useSelector((state) => state.movies.currentPage);
  const moviesCatalog = useSelector((state) => state.movies.moviesCatalog);
  const favoriteList = useSelector(favoriteListSelector);
  const dispatch = useDispatch();

  const loadMoviesData = useCallback(async () => {
    try {
      const url = createUrl(page, years, option, genres);
      dispatch(fetchMoviesData(url));
      dispatch(fetchFavoriteMovies(accountId));
    } catch (error) {
      console.error(error);
    }
  }, [page, years, option, genres, dispatch, accountId]);

  useEffect(() => {
    dispatch(setUser({ accountId: accountId, isAuthenticated: true }));
  }, [dispatch, accountId]);

  useEffect(() => {
    loadMoviesData();
  }, [loadMoviesData]);

  const renderedMovies = useMemo(
    () =>
      moviesCatalog?.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favoriteList.has(movie.id)}
        />
      )),
    [favoriteList, moviesCatalog]
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        alignContent: "flex-start",
        gap: "12px",
      }}
    >
      {renderedMovies}
    </Box>
  );
};

export default MoviesCatalog;
