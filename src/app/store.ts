import { configureStore } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
import filtersReducer from "./filtersSlice";
import { saveState } from "./sessionStorage";
import throttle from "lodash.throttle";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
  },
});

store.subscribe(
  throttle(() => {
    saveState({
      filters: store.getState().filters,
    });
  }, 1000)
);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
