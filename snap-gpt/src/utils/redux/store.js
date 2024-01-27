import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './slice/UserSlice';
import MovieSlice from './slice/MovieSlice';

export const appStore = configureStore({
    reducer: {
        user: UserSlice,
        movies: MovieSlice
    }
})