import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: [],
    trailerVideo: {},
    populerMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
  },
  reducers: {
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    getPopulerMovies: (state, action) => {
      state.populerMovies = action.payload;
    },
    getTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    getUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const { getNowPlayingMovies, addTrailerVideo ,getPopulerMovies,getTopRatedMovies,getUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer