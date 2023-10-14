import { createSlice } from "@reduxjs/toolkit";
import { getCurrentYear } from "../utils/utils";

const initialState = {
  selectedOptions: "Популярное",
  selectedYears: [1980, getCurrentYear()],
  selectedGenres: [],
  currentPage: 1,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
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
});

export const { setActivePage, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
