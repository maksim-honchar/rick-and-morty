import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    species: "",
  },
  reducers: {
    speciesFilter: (state, action) => {
      state.species = action.payload;
    },
  },
});

export const { speciesFilter } = filtersSlice.actions;

export const speciesSelect = (state: RootState) => state.filters.species;

export default filtersSlice.reducer;
