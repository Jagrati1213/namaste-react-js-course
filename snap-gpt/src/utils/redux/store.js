import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './slice/UserSlice';
import MovieSlice from './slice/MovieSlice';
import GptSlice from './slice/GptSlice';
import configSlice from './slice/Config';

export const appStore = configureStore({
    reducer: {
        user: UserSlice,
        movies: MovieSlice,
        gpt: GptSlice,
        config: configSlice,
    }
})