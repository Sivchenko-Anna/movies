import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../api/variables.js";
import { getData } from "../api/get_data.js";

const initialState = {
  isAuthenticated: false,
  email: null,
  token: null,
  accountId: null,
  login: null,
  status: null,
  error: null,
};

export const getUserId = createAsyncThunk("user/getUserId", async () => {
  const url = `${API.URL}${API.LINKS.ACCOUNT_ID}`;
  try {
    const response = await getData(url);
    return response;
  } catch (error) {
    throw new Error("Error fetching user ID:", error);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    logoutUser: (state) => {
      return {
        ...state,
        isAuthenticated: false,
        email: null,
        token: null,
        accountId: null,
        login: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserId.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getUserId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.accountId = action.payload.id;
        state.login = action.payload.username;
        state.isAuthenticated = true;
      })
      .addCase(getUserId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
