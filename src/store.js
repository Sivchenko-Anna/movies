import { configureStore, combineReducers } from "@reduxjs/toolkit";
import modalReducer from "./slices/modal_slice.js";

const rootReducer = combineReducers({
  modal: modalReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;