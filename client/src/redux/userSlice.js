import { createSlice } from "@reduxjs/toolkit";

// initialState
const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

// create slice
export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    // login
    loginStart: (state) => {
      state.loading = true;
    },

    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },

    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },

    // logout
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;
