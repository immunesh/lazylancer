import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import portfolioReducer from "./slices/portfolioSlice";
import profileReducer from "./slices/profileSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    portfolio: portfolioReducer,
    profile: profileReducer,
    theme: themeReducer,
  },
});