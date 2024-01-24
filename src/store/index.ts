import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import home from "../slices/homeSlice";
import properties from "../slices/propertiesSlice";
import { wishlistReducer } from "../slices/wishlistSlice";

const persistConfig = {
  key: "root",
  storage,
};

// Define the types for the persisted state

// Use persistReducer to persist the 'wishlist' slice
const persistedWishlistReducer = persistReducer<any>(
  persistConfig,
  wishlistReducer
);

// Configure the Redux store
const store = configureStore({
  reducer: {
    home,
    properties,
    wishlist: persistedWishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

// Create the Redux Persist store
export const persistor = persistStore(store);

export default store;
