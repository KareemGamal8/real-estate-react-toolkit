import { configureStore } from "@reduxjs/toolkit";
import home from "../slices/homeSlice";
import properties from "../slices/propertiesSlice";

const store = configureStore({
  reducer: { home, properties },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
