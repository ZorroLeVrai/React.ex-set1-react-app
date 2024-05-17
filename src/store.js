import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Ex8/counterSlice';
import commentReducer from './Ex9/commentSlice';
import api from './Ex9/middlewares/api';

const baseURL = "https://jsonplaceholder.typicode.com/";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    comment: commentReducer
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api(baseURL)
  ]
});
