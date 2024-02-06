import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        searchLimit: null,
        openAiKey: null,
    },
    reducers: {
        addUser: (_, action) => {
            return action.payload;
        },
        removeUser: () => {
            return null;
        },
    }
});

export const { addUser, removeUser } = UserSlice.actions;
export const selectUserState = (state) => state.user;
export default UserSlice.reducer;