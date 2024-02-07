import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: 'GptSlice',
    initialState: {
        showRecommendation: false,
        gptMoviesNames: null,
        gptMoviesResult: null,
        loading: false,
    },
    reducers: {
        toggleRecommendationView: (state, _) => {
            state.showRecommendation = !state.showRecommendation;
        },
        addGptSearch: (state, action) => {
            const { moviesName, moviesResult } = action.payload;
            state.gptMoviesNames = moviesName;
            state.gptMoviesResult = moviesResult;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { toggleRecommendationView, addGptSearch, setLoading } = GptSlice.actions;
export default GptSlice.reducer;