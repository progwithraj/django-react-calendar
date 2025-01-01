import { configureStore } from "@reduxjs/toolkit";
import generalSliceReducer from "./slices/general/general.slice.js";
import authSliceReducer from "./slices/general/auth.slice.js";

export const store = configureStore({
  reducer: {
    // Add reducers here
    general: generalSliceReducer,
    auth: authSliceReducer,
  },
});