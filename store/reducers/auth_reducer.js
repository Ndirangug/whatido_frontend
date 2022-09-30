import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isFetching: false,
    authenticated: false,
    currentUser: null,
    visibility: false,
    location: {},
    error: false,
  },

  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    setLoggedInState: (state, action) => {
      state.authenticated = action.payload;
    },
  },
});

export const { setLoggedInState, loginStart } = userSlice.actions;

export default userSlice.reducer;
