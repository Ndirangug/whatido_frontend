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
    setLoginLoading: (state, action) => {
      state.isFetching = action.payload;
    },
    setLoginError: (state, action) => {
      state.error = action.payload;
    },
    setAuthState: (state, action) => {
      state.authenticated = action.payload;
    },
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setVisibility: (state, action) => {
      state.visibility = action.payload;
    },
  },
});

export const {
  setAuthState,
  setLoginLoading,
  setUser,
  setVisibility,
  setLoginError,
} = userSlice.actions;

export default usernvSlice.reducer;
