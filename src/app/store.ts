import { configureStore } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
import charactersReducer from "../features/characters/charactersSlice";
import { saveState } from "./sessionStorage";
import throttle from "lodash.throttle";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});

store.subscribe(
  throttle(() => {
    saveState({
      characters: store.getState().characters,
    });
  }, 1000)
);

export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
