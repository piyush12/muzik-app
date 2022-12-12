import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

export interface ChartsState {
  charts: null | Charts[];
  loading: boolean;
  error: null | string;
}

export interface SongAction {
  name: string;
  type: string;
  uri: string;
}

export interface SongArtists {
  alias: string;
  id: string;
  adamid: string;
}

export interface Charts {
  type: string;
  key: string;
  title: string;
  subtitle: string;
  images: {
    background: string;
  };
  hub: {
    type: string;
    image: string;
    actions: SongAction[];
  };
  artists: SongArtists[];
}

const initialState: ChartsState = {
  loading: false,
  charts: null,
  error: null,
};

export const chartsSlice = createSlice({
  name: "charts",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setCharts: (state, action: PayloadAction<Charts[]>) => {
      state.charts = action.payload;
    },
    setError: (state, action: PayloadAction<null | string>) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCharts, setLoading, setError } = chartsSlice.actions;

export const charts = (state: RootState) => state.charts;

export default chartsSlice.reducer;
