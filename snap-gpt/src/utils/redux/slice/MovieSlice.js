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
        loading: {
            nowPlaying: false,
            topRated: false,
            upComing: false,
            casts: false,
            similarMovies: false,
        },
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
        },
        setLoading: (state, action) => {
            const { dataKey, loadingState } = action.payload;
            state.loading[dataKey] = loadingState;
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
    addSimilarMovies,
    setLoading } = MovieSlice.actions;
export default MovieSlice.reducer;