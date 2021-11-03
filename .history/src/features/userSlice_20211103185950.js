import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "user",
  initialState: {
    selectedEmail: null,
    senMessageIsOpen: false,
  },
  reducers: {
  
  },
});

export const { selectMail, openSendMessage, closeSendMessage } =
  mailSlice.actions;
export const selectSenMessageIsOpen = (state) => state.mail.senMessageIsOpen;
export const selectOpenEmail = (state) => state.mail.selectedEmail;

console.log(selectOpenEmail);
export default mailSlice.reducer;
