import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: 'GptSlice',
    initialState: {
        showRecommendation: false,
        gptMoviesNames: null,
        gptMoviesResult: null,
    },
    reducers: {
        toggleRecommendationView: (state, _) => {
            state.showRecommendation = !state.showRecommendation;
        },
        addGptSearch: (state, action) => {
            const { moviesName, moviesResult } = action.payload;
            state.gptMoviesNames = moviesName;
            state.gptMoviesResult = moviesResult;
        }
    }
});

export const { toggleRecommendationView, addGptSearch } = GptSlice.actions;
export default GptSlice.reducer;