import { createSlice } from '@reduxjs/toolkit';

const MovieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        trailerVideo: null,
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
        }
    }
});

export const { addNowPlayingMovies, addTopRatedMovies, addUpComingsMovies, addTrailerVideo } = MovieSlice.actions;
export default MovieSlice.reducer;