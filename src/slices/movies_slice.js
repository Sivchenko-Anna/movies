import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSearchMovie } from "../api/get_search_movie";

const initialState = {
  search: "",
  MoviesCatalog: [],
};

const searchMovie = createAsyncThunk(
  "movies/searchMovie",
  async (query) => {
    try {
      const response = await getSearchMovie(query);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      throw new Error("Error search Movie:", error);
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchMovie: (state, action) => {
      state.search = action.payload.search;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchMovie.fulfilled, (state, action) => {
      state.MoviesCatalog = action.payload.results;
    });
  }
});

export const { setSearchMovie } = moviesSlice.actions;
export { searchMovie };
export default moviesSlice.reducer;
