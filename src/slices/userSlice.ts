import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser: (_state, action) => {
      return action.payload;
    },
    clearUser: (_state) => null,
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const selectUser = (state: { user: any }) => state.user;

export default userSlice.reducer;
