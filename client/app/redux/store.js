import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
