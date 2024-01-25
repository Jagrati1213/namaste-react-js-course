import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './slice/UserSlice';

export const appStore = configureStore({
    reducer: {
        user: UserSlice,
    }
})