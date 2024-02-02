import { createSlice } from '@reduxjs/toolkit';

const MovieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        trailerVideo: null,
        movieDetails: {
            movie: null,
            casts: null,
            similarMovies: null,
        }
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
        addSingleMovieDetails: (state, action) => {
            const { movie, casts, similarMovies } = action.payload
            state.movieDetails.movie = movie;
            state.movieDetails.casts = casts;
            state.movieDetails.similarMovies = similarMovies;
        }
    }
});

export const {
    addNowPlayingMovies,
    addTopRatedMovies,
    addUpComingsMovies,
    addTrailerVideo,
    addSingleMovieDetails } = MovieSlice.actions;
export default MovieSlice.reducer;