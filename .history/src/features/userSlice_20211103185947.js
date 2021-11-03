import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "user",
  initialState: {
    selectedEmail: null,
    senMessageIsOpen: false,
  },
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

export const { selectMail, openSendMessage, closeSendMessage } =
  mailSlice.actions;
export const selectSenMessageIsOpen = (state) => state.mail.senMessageIsOpen;
export const selectOpenEmail = (state) => state.mail.selectedEmail;

console.log(selectOpenEmail);
export default mailSlice.reducer;
