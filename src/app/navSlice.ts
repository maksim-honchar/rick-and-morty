import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { loadState } from "./sessionStorage";

interface InitialState {
  page: number;
}

const persistedState = loadState();

const initialState: InitialState = {
  page: persistedState ? persistedState.navigation.page : 0,
};

export const navSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = navSlice.actions;

export const pageSelect = (state: RootState) => state.navigation.page;

export default navSlice.reducer;
