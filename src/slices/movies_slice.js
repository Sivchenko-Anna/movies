import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { getSearchMovie } from "../api/get_search_movie";
import { getCurrentYear } from "../utils/get_current_year";
import { getData } from "../api/get_data";
import { API } from "../api/variables";

const favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

const initialState = {
  search: "",
  options: [
    { id: 0, value: "popularity", label: "Популярности" },
    { id: 1, value: "raiting", label: "Топ рейтинг" },
  ],
  selectedOption: "popularity",
  selectedYears: [1960, getCurrentYear()],
  selectedGenres: [],
  genres: [],
  currentPage: 1,
  moviesCatalog: [],
  favoriteMovies: favoriteMovies,
};

export const favoriteListSelector = createSelector(
  (state) => state.movies.favoriteMovies,
  (favoriteMovies) => new Set(favoriteMovies)
);

export const toggleFavoriteMovie = (movieId) => (dispatch, getState) => {
  const { favoriteMovies } = getState().movies;
  const updatedFavoriteMovies = favoriteMovies.includes(movieId)
    ? favoriteMovies.filter((id) => id !== movieId)
    : [...favoriteMovies, movieId];
  dispatch(setFavoriteMovies(updatedFavoriteMovies));
};

export const fetchFavoriteMovies = createAsyncThunk(
  "movies/fetchFavoriteMovies",
  async (accountId) => {
    const url = `${API.URL}${API.LINKS.GET_FAVOTIRE(accountId)}`;
    const movieFavoriteList = await await getData(url);
    return movieFavoriteList.results.map((movie) => movie.id);
  }
);

const searchMovie = createAsyncThunk(
  "movies/searchMovie",
  async (query, { dispatch }) => {
    try {
      const search = await getSearchMovie(query);
      dispatch(setMoviesCatalog(search.results));
      return search.results;
    } catch (error) {
      throw new Error("Error search Movie:", error);
    }
  }
);

const fetchGenres = createAsyncThunk("movies/fetchGenres", async () => {
  const url = `${API.URL}${API.LINKS.GENRE}?${API.LINKS.LANGUAGE}`
  const data = await getData(url);
  return data.genres;
});

const fetchMoviesData = createAsyncThunk(
  "movies/fetchMoviesData",
  async (url) => {
    const response = await getData(url);
    return response.results;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchMovie: (state, action) => {
      state.search = action.payload;
    },
    setActiveOption: (state, action) => {
      state.selectedOption = action.payload;
    },
    setActiveYears: (state, action) => {
      state.selectedYears = action.payload;
    },
    setActiveGenres: (state, action) => {
      state.selectedGenres = action.payload;
    },
    setActivePage: (state, action) => {
      state.currentPage = action.payload.currentPage;
    },
    setMoviesCatalog: (state, action) => {
      state.moviesCatalog = action.payload;
    },
    setFavoriteMovies: (state, action) => {
      state.favoriteMovies = action.payload;
      localStorage.setItem("favoriteMovies", JSON.stringify(action.payload));
    },
    resetFilters: (state) => {
      return {
        ...state,
        selectedOption: "Популярное",
        selectedYears: [1960, getCurrentYear()],
        selectedGenres: [],
        currentPage: 1,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovie.fulfilled, (state, action) => {
        state.moviesCatalog = action.payload;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
      })
      .addCase(fetchMoviesData.fulfilled, (state, action) => {
        state.moviesCatalog = action.payload;
      });
  },
});

export const {
  setSearchMovie,
  setActiveOption,
  setActiveYears,
  setActiveGenres,
  setActivePage,
  setMoviesCatalog,
  setFavoriteMovies,
  resetFilters,
} = moviesSlice.actions;
export { searchMovie, fetchGenres, fetchMoviesData };
export default moviesSlice.reducer;
