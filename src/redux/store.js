import { configureStore } from '@reduxjs/toolkit';
import { feedbackReducer } from './feedback/feedbackSlice';

export const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
