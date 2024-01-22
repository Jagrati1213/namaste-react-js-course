import { createSlice, current } from "@reduxjs/toolkit"

const cartSlice = createSlice(
    {
        name: 'cartReducer',
        initialState: {
            item: []
        },
        reducers: {
            addItem: (state, action) => {
                state.item.push(action.payload);
            },
            removeItem: (state, action) => {
                const findIndex = state.item.findIndex((item) => item.card.info.id === action.payload);
                state.item.splice(findIndex, 1);
            },
            clearCart: (state) => {
                state.item.length = 0;
                // return {item: []}; //also valid 
            }
        }
    }
)


export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;