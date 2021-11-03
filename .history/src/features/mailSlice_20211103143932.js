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

export const selectMail = (state) => state.counter.value;

export const 

export default mailSlice.reducer;
