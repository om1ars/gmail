import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/counterSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});
