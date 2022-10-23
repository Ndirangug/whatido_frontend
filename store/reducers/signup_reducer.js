import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    signupStep: 0,
  },
  reducers: {
    setSignupStep: (state, action) => {
      state.signupStep = action.payload;
    },
  },
});

export const { setSignupStep } = signupSlice.actions;

export default signupSlice.reducer;
