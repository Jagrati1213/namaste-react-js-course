import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: 'GptSlice',
    initialState: {
        showRecommendation: false,
    },
    reducers: {
        toggleRecommendationView: (state, _) => {
            state.showRecommendation = !state.showRecommendation;
        }
    }
});

export const { toggleRecommendationView } = GptSlice.actions;
export default GptSlice.reducer;