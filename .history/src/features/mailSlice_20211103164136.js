import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedEmail: null,
  senMessageIsOpen: false,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    openSendMessage: (state) => {
      state.senMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.senMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;
export const selectSenMessageIsOpen = state => state.mail.senMessageIsOpen
export default mailSlice.reducer;
