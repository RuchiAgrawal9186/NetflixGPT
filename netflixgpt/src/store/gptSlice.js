import { createSlice } from "@reduxjs/toolkit";

export const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    loading:false,
    moviesNames: [],
    moviesResults: [],
  },
  reducers: {
    handleLoading(state, action) {
      state.loading=action.payload
    },
    handleMovieName(state, action) {
      state.moviesNames = action.payload;
    },
    handleMovieResult(state, action) {
      state.moviesResults = action.payload;
    },
  },
});

export const { handleMovieName, handleMovieResult, handleLoading } = gptSlice.actions;
export default gptSlice.reducer