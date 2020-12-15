import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    pagination: 10,
  },
  reducers: {
    paginPage: (state, action) => {
      state.pagination = action.payload;
    },
  },
});

export const { paginPage } = charactersSlice.actions;

export const selectPagination = (state: RootState) =>
  state.characters.pagination;

export default charactersSlice.reducer;
