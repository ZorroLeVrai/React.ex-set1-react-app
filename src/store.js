import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Ex8/counterSlice';
import commentReducer from './Ex9/commentSlice';
import taskReducer from './Ex11/slices/taskSlice';
import api from './Ex9/middlewares/api';

const baseURL = "https://jsonplaceholder.typicode.com/";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    comment: commentReducer,
    task: taskReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api(baseURL)
  ]
});
