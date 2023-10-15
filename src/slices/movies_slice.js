import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSearchMovie } from "../api/get_search_movie";
import { getCurrentYear } from "../utils/utils";

const initialState = {
  search: "",
  options: [
    { id: 0, value: "popularity", label: "Популярности" },
    { id: 1, value: "raiting", label: "Топ рейтинг" },
  ],
  selectedOption: "popularity",
  selectedYears: [1980, getCurrentYear()],
  selectedGenres: [],
  currentPage: 1,
  MoviesCatalog: [],
};

const searchMovie = createAsyncThunk("movies/searchMovie", async (query) => {
  try {
    const response = await getSearchMovie(query);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Error search Movie:", error);
  }
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
      state.currentPage = 1;
    },
    setActivePage: (state, action) => {
      state.currentPage = action.payload.currentPage;
    },
    resetFilters: (state) => {
      return {
        ...state,
        selectedOptions: "Популярное",
        selectedYear: [1980, getCurrentYear()],
        selectedGenres: [],
        currentPage: 1,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchMovie.fulfilled, (state, action) => {
      state.MoviesCatalog = action.payload.results;
    });
  },
});

export const { setSearchMovie, setActiveOption, setActivePage, resetFilters } =
  moviesSlice.actions;
export { searchMovie };
export default moviesSlice.reducer;
