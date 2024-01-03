import { configureStore } from "@reduxjs/toolkit";
import home from "../modules/home/slices";

const store = configureStore({
  reducer: { home },
});

export default store;
