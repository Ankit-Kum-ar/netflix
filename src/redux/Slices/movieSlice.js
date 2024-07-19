import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: [],
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        tvShows: null,
        popularShows: null,
        topRatedShows: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        },
        addTvShows: (state, action) => {
            state.tvShows = action.payload
        },
        addPopularShows: (state, action) => {
            state.popularShows = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addTopRatedShows: (state, action) => {
            state.topRatedShows = action.payload
        }
    }
})

export const {addNowPlayingMovies , addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addTvShows, addPopularShows, addTopRatedShows} = movieSlice.actions
export default movieSlice.reducer