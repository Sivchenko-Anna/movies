import { configureStore, combineReducers } from "@reduxjs/toolkit";
import modalReducer from "./slices/modal_slice.js";
import userReducer from "./slices/user_slice.js"
import filtersReducer from "./slices/filters_slice.js"

const rootReducer = combineReducers({
  modal: modalReducer,
  user: userReducer,
  filters: filtersReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;