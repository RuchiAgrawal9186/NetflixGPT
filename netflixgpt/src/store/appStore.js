import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import languageReducer from "./languageSlice";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    language: languageReducer,
  },
});
