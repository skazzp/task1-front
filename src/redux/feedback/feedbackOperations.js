import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task1-back-skazzp.vercel.app/';

export const createFeedback = createAsyncThunk('feedback/registerUser ', async (data, thunkApi) => {
  try {
    const response = await axios.post('/feedback', data);
    console.log(response);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.status);
  }
});
