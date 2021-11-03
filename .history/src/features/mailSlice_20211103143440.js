import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
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


export const {increment} = mailSlice.reducer

export const selectMail = (state) => state.counter.value;



export default mailSlice.reducer;
