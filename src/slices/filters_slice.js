import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setActivePage: (state, action) => {
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const { setActivePage } = filtersSlice.actions;
export default filtersSlice.reducer;
