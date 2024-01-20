import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Property } from "../design-system/types";

type filtersTypes = {
  searchQuery?: string;
};

type InitialStateTypes = {
  properties: Property[];
  property: Property;
  loading: boolean;
  error: any;
  filters: filtersTypes;
};

const initialState: InitialStateTypes = {
  properties: [],
  property: {
    id: 0,
    type: "",
    name: "",
    bedrooms: 0,
    bathrooms: 0,
    address: "",
    yearBuilt: 0,
    size: 0,
    isFeatured: false,
    images: [],
    description: "",
    interiorDetails: [],
    outdoorDetails: [],
    utilities: [],
    otherFeatures: [],
    price: 0,
    isAvailable: true,
    floors: 0,
    parkingSpaces: 0
  },
  filters: {
    searchQuery: "",
  },
  loading: false,
  error: null,
};

export const getProperties: any = createAsyncThunk(
  "properties/getProperties",
  async (
    { page, filters }: { page: number; filters: filtersTypes },
    thunkAPI
  ) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let apiUrl = `https://real-estate-server-ctvu.onrender.com/properties?_page=${
        page || 1
      }&_limit=6`;

      if (filters.searchQuery) {
        apiUrl += `&name=${filters.searchQuery}`;
      }
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error: any) {
      rejectWithValue(error.message);
    }
  }
);

export const getProperty: any = createAsyncThunk(
  "properties/getProperty",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(
        `https://real-estate-server-ctvu.onrender.com/properties/${id}`
      );
      const data = await response.json();
      return data;
    } catch (error: any) {
      rejectWithValue(error.message);
      console.log(1);
    }
  }
);

export const setSearchQuery = createAction(
  "properties/setSearchQuery",
  (query) => ({
    payload: query,
  })
);

export const resetProperties = createAction("properties/resetProperties");

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
      state.properties = action.payload;
      state.loading = false;
      state.error === null;
    });
    builder.addCase(getProperties.rejected, (state, action) => {
      state.loading = false;
      state.error === action.payload;
    });
    builder.addCase(getProperty.pending, (state) => {
      state.loading = true;
      state.error === null;
    });
    builder.addCase(getProperty.fulfilled, (state, action) => {
      state.property = action.payload;
      state.loading = false;
      state.error === null;
    });
    builder.addCase(getProperty.rejected, (state, action) => {
      state.loading = false;
      state.error === action.payload;
    });
    builder.addCase(setSearchQuery, (state, action) => {
      state.filters.searchQuery = action.payload;
    });
    builder.addCase(resetProperties, (state) => {
      state.properties = [];
      state.loading = false;
      state.error = null;
      state.filters = {};
    });
  },
});

export default propertiesSlice.reducer;
