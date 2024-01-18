import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Property } from "../design-system/types";

type InitialStateTypes = {
  properties: Property[];
  searchQuery: string;
  loading: boolean;
  error: any;
};

const initialState: InitialStateTypes = {
  properties: [],
  searchQuery: "",
  loading: false,
  error: null,
};

export const getProperties: any = createAsyncThunk(
  "properties/getProperties",
  async (page: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(
        `https://real-estate-server-ctvu.onrender.com/properties?_page=${page}&_limit=6`
      );
      const data = await response.json();
      return data;
    } catch (error: any) {
      rejectWithValue(error.message);
    }
  }
);

export const setSearchQuery = createAction(
  "properties/setSearchQuery",
  (query) => ({
    payload: query,
  })
);

export const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProperties.pending, (state) => {
      state.loading = true;
      state.error === null;
    });
    builder.addCase(getProperties.fulfilled, (state, action) => {
      if (state.searchQuery !== "") {
        state.properties = action.payload.filter((property: Property) =>
          property.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      } else {
        state.properties = action.payload;
      }
      state.loading = false;
      state.error === null;
    });
    builder.addCase(getProperties.rejected, (state, action) => {
      state.loading = false;
      state.error === action.payload;
    });
    builder.addCase(setSearchQuery, (state, action) => {
      state.searchQuery = action.payload;
    });
  },
});

export default propertiesSlice.reducer;
