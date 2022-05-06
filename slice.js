import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "Name",
  initialState: {
    head: "Header",
    foot: "Footer"
  },
  reducers: {
    change: (state, action) => {
      state.head = action.payload.name;
      state.foot = action.payload.name;
    }
  }
});
export const { change } = userSlice.actions;
export default userSlice.reducer;
