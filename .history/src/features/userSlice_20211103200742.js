import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    loginWithGoogle: (state, action) => {
      state.user = action.payloaf;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { loginWithGoogle, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;

console.log(selectUser);
export default userSlice.reducer;
