import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { isLoggedIn: false, username: "Ahmed", password: 123 },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
