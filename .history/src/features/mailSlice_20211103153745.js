import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
export const senMessageIsOpen = state.

export default mailSlice.reducer;
