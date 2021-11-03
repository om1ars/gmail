import { configureStore } from '@reduxjs/toolkit';
import Reducer from '../features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
