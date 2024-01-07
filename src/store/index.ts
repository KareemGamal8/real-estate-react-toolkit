import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import home from "../modules/home/slices";
import userReducer from "../slices/userSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["persist/PERSIST"],
  serializableCheck: false,
};
const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: { home, user: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
