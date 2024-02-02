import { createSlice } from '@reduxjs/toolkit';

const MovieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        trailerVideo: null,
        movieDetails: null,
        casts: null,
        similarMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpComingsMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addMovieDetails: (state, action) => {
            state.movieDetails = action.payload
        },
        addCasts: (state, action) => {
            state.casts = action.payload;
        },
        addSimilarMovies: (state, action) => {
            state.similarMovies = action.payload;
        }
    }
});

export const {
    addNowPlayingMovies,
    addTopRatedMovies,
    addUpComingsMovies,
    addTrailerVideo,
    addMovieDetails,
    addCasts,
    addSimilarMovies } = MovieSlice.actions;
export default MovieSlice.reducer;