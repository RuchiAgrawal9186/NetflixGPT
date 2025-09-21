import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: [],
        trailerVideo:{}
    },
    reducers: {
        getNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies=action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo=action.payload
        }
    }
})

export const { getNowPlayingMovies, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer