import { createSlice } from "@reduxjs/toolkit";
export const generalSlice = createSlice({
    name: "general",
    initialState: {
        firstTimeLoad: false,
        loading: false,
        error: "",
    },
    reducers: {
        setFirstTimeLoad: (state, action) => {
            state.firstTimeLoad = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setFirstTimeLoad, setLoading, setError } = generalSlice.actions;
export default generalSlice.reducer;
