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
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
 
});

export const { increment,   } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;



export default counterSlice.reducer;
