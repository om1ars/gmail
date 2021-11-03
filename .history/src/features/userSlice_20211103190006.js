import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "user",
  initialState: {

  },
  reducers: {
  
  },
});

export const {  } =
  userSlice.actions;
export const selectSenMessageIsOpen = (state) => state.mail.senMessageIsOpen;
export const selectOpenEmail = (state) => state.mail.selectedEmail;

console.log(selectOpenEmail);
export default mailSlice.reducer;
