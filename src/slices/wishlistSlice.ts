import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Property } from "../design-system/types";

export type WishlistInitialStateTypes = {
  properties: Property[];
  loading: boolean;
  error: any;
};

const initialState: WishlistInitialStateTypes = {
  properties: [],
  loading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addPropertyToWishlist(state, action: PayloadAction<Property>) {
      state.properties.push(action.payload);
      localStorage.setItem("inWishlist", `${action.payload.id}`);
    },
    removePropertyFromWishlist(state, action: PayloadAction<Property>) {
      const removedPropertyId = state.properties.findIndex(
        (property) => property.id === action.payload.id
      );
      if (removedPropertyId !== -1) {
        localStorage.removeItem("inWishlist");
        state.properties.splice(removedPropertyId, 1);
      }
    },
  },
});

export const { addPropertyToWishlist, removePropertyFromWishlist } =
  wishlistSlice.actions;

export const { reducer: wishlistReducer } = wishlistSlice;
