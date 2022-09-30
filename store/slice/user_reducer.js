import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
  },
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      state.currentUser = action.payload;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
