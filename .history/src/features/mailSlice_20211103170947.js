import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedEmail: null,
  senMessageIsOpen: false,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    selectMail: (state, action) => {
      state.selectedEmail = action.payload;
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
export const selectOpenEmail = (state) => state.mail.selectEmail;
export default mailSlice.reducer;
