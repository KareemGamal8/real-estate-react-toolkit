import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProperties: any = createAsyncThunk(
  "properties/getProperties",
  async (pageNumber: number = 1, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(
        `https://real-estate-server-ctvu.onrender.com/properties?_page=${pageNumber}&_limit=6`
      );
      const data = await response.json();
      return data;
    } catch (error: any) {
      rejectWithValue(error.message);
    }
  }
);

export const propertiesSlice = createSlice({
  name: "properties",
  initialState: { properties: [], loading: false, error: null },
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
  },
});

export default propertiesSlice.reducer;
