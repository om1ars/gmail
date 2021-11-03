import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  senMessageIsOpen: false,
};


export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    }
  },
 
});



export const selectMail = (state) => state.counter.value;



export default mailSlice.reducer;
