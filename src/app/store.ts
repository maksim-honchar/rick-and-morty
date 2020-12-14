import { configureStore } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
import counterReducer from "../features/counter/counterSlice";
import { saveState } from "./sessionStorage";
import throttle from "lodash.throttle";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

store.subscribe(
  throttle(() => {
    saveState({
      counter: store.getState().counter,
    });
  }, 1000)
);

export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
