import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post, Property } from "../../../design-system/types";

type InitialStateTypes = {
  data: {
    latestProperties: Property[];
    posts: Post[];
  };
  loading: boolean;
  error: null;
};

const initialState: InitialStateTypes = {
  data: { latestProperties: [], posts: [] },
  loading: false,
  error: null,
};

export const getHomeData: any = createAsyncThunk(
  "home/getData",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(
        "https://real-estate-server-ctvu.onrender.com/home"
      );
      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getHomeData.pending, (state) => {
      state.loading === true;
      state.error === null;
    });
    builder.addCase(getHomeData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading === false;
      state.error === null;
    });
    builder.addCase(getHomeData.rejected, (state, action) => {
      state.loading === false;
      state.error === action.payload;
    });
  },
});

export default homeSlice.reducer;
