import { createSlice } from "@reduxjs/toolkit";

const 

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedEmail: null,
    senMessageIsOpen: false,
  },
  reducers: {
    selectMail: (state, action) => {
      state .selectedEmail = action.payload;
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
export const selectOpenEmail = (state) => state.mail.selectMail;
export default mailSlice.reducer;
