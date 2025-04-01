import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./Features/counter/CounterSlice";
export const store = configureStore({
  reducer: {
    counter: counterslice,
  },
});
