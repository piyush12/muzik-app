import { configureStore } from "@reduxjs/toolkit";
import chartsReducer from "./slices/Charts";

export const store = configureStore({
  reducer: {
    charts: chartsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
