import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./dashboard-slice";
import loginSlice from "./login-slice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    dashboard: dashboardSlice.reducer,
  },
});

export default store;
