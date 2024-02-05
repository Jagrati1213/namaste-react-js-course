import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addUser: (_, action) => {
            return action.payload;
        },
        removeUser: () => {
            return null;
        }
    }
});

export const { addUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;