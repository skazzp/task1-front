import { createSlice } from '@reduxjs/toolkit';
import { createFeedback } from './feedbackOperations';

const feedbackInitialState = {
  name: '',
  email: '',
  message: '',
  error: null,
};

const pendingHandlerAuth = (state, action) => {
  state.error = null;
};

const rejectedHandler = (state, action) => {
  state.error = action.payload;
};

const feedbackSlice = createSlice({
  name: 'feedback',

  initialState: feedbackInitialState,

  reducers: {
    changeFormValues(state, action) {
      state[action.payload.name] = action.payload.value;
    },
  },
  extraReducers: builder => {
    builder.addCase(createFeedback.pending, pendingHandlerAuth);
    builder.addCase(createFeedback.rejected, rejectedHandler);
    builder.addCase(createFeedback.fulfilled, (state, action) => {
      state.error = null;
      state.name = '';
      state.email = '';
      state.message = '';
    });
  },
});

export const { changeFormValues } = feedbackSlice.actions;
export const feedbackReducer = feedbackSlice.reducer;
