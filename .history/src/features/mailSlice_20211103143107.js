import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};


export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    increment: (state) => {

      state.value += 1;
    },
  },
 
});

export const { increment,   } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;



export default counterSlice.reducer;
