import { createSlice } from "@reduxjs/toolkit";

export const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    moviesNames: [],
    moviesResults: [],
  },
  reducers: {
    handleMovieName(state, action) {
      state.moviesNames = action.payload;
    },
    handleMovieResult(state, action) {
      state.moviesResults = action.payload;
    },
  },
});

export const {handleMovieName,handleMovieResult} = gptSlice.actions
export default gptSlice.reducer