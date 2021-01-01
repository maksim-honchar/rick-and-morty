import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "./watchlistSlice";
import navReducer from "./navSlice";
import { saveState } from "./sessionStorage";
import throttle from "lodash.throttle";

export const store = configureStore({
  reducer: {
    watchlist: watchlistReducer,
    navigation: navReducer,
  },
});

store.subscribe(
  throttle(() => {
    saveState({
      watchlist: store.getState().watchlist,
      navigation: store.getState().navigation,
    });
  }, 1000)
);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
