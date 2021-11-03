import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};


export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {

  },
 
});


export const selectMail = (state) => state.counter.value;



export default mailSlice.reducer;
