import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterSlice from "./counter";

const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterSlice,
  },
});

export default store;
