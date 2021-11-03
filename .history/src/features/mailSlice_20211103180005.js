import { createSlice } from "@reduxjs/toolkit";


export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedEmail: null,
    senMessageIsOpen: false,
    testingEmail: ''
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedEmail = action.payload;
    },
    testingEmail: (state) => {
      state.testingEmail = 
    },
    openSendMessage: (state) => {
      state.senMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.senMessageIsOpen = false;
    },
  },
});

export const { selectEmail, openSendMessage, closeSendMessage } =
  mailSlice.actions;
export const selectSenMessageIsOpen = (state) => state.mail.senMessageIsOpen;
export const selectOpenEmail = (state) => state.mail.selectedEmail;

console.log(selectOpenEmail);
export default mailSlice.reducer;
