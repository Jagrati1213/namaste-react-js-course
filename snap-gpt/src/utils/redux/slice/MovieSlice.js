import { createSlice } from '@reduxjs/toolkit';

const MovieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null
    },
    reducers: {
        addMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        }
    }
});

export const { addMovies } = MovieSlice.actions;
export default MovieSlice.reducer;