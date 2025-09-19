import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies:[]
    },
    reducers: {
        getNowPlayingMovies: (state, action) => {
            console.log("action",action.payload)
            state.nowPlayingMovies=action.payload
        }
    }
})

export const {getNowPlayingMovies}=movieSlice.actions
export default movieSlice.reducer