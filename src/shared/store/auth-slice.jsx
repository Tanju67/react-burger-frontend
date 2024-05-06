import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: {},
  },
  reducers: {
    onLogin(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.token);
    },
    onLogout(state, action) {
      localStorage.removeItem("token");
      state.isLoggedIn = false;
      state.user = {};
    },
    setUser(state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
