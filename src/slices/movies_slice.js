import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSearchMovie } from "../api/get_search_movie";
import { getCurrentYear } from "../utils/utils";
import { getData } from "../api/get_data";
import { API } from "../api/variables";

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
};

const searchMovie = createAsyncThunk("movies/searchMovie", async (query) => {
  try {
    const response = await getSearchMovie(query);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error search Movie:", error);
  }
});

const fetchGenres = createAsyncThunk("movies/fetchGenres", async () => {
  const url = `${API.URL}${API.LINKS.GENRE}?${API.LINKS.LANGUAGE}`
  const data = await getData(url);
  return data.genres;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchMovie: (state, action) => {
      state.search = action.payload.search;
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
        state.moviesCatalog = action.payload.results;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
      });
  },
});

export const {
  setSearchMovie,
  setActiveOption,
  setActiveYears,
  setActiveGenres,
  setActivePage,
  resetFilters,
} = moviesSlice.actions;
export { searchMovie, fetchGenres };
export default moviesSlice.reducer;
