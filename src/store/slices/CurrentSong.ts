import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import { Charts } from "./Charts";

export interface SongState {
  song: null | Charts;
  loading: boolean;
  error: null | string;
}

const initialState: SongState = {
  loading: false,
  song: null,
  error: null,
};

export const songSlice = createSlice({
  name: "currentSong",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setCharts: (state, action: PayloadAction<Charts>) => {
      state.song = action.payload;
    },
    setError: (state, action: PayloadAction<null | string>) => {
      state.error = action.payload;
    },
  },
});
