import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isModalOpen = action.payload.isModalOpen;
    },
  },
});

export const { showModal } = modalSlice.actions;
export default modalSlice.reducer;