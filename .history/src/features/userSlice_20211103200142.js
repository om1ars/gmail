import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payloaf;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { loginWithGoogle, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
