import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { loadState } from "./sessionStorage";

interface InitialState {
  episodes: { id: string; title: string; checked: boolean }[];
}

const persistedState = loadState();

const initialState: InitialState = {
  episodes: persistedState ? persistedState.watchlist.episodes : [],
};

export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addEpisode: (state, action) => {
      state.episodes = [...state.episodes, action.payload];
    },
    toggleEpisode: (state, action) => {
      state.episodes = state.episodes.map((episode) => {
        if (episode.id === action.payload) {
          return { ...episode, ...{ checked: !episode.checked } };
        } else {
          return episode;
        }
      });
    },
    deleteEpisode: (state, action) => {
      state.episodes = state.episodes.filter(
        (episode) => episode.id !== action.payload
      );
    },
  },
});

export const {
  addEpisode,
  toggleEpisode,
  deleteEpisode,
} = watchlistSlice.actions;

export const episodesSelect = (state: RootState) => state.watchlist.episodes;

export default watchlistSlice.reducer;
