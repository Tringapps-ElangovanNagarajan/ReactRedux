
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "name",
  initialState: {
    head: "Welcome",
    foot: "Thank You"
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

