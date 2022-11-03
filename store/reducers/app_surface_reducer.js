import { createSlice } from '@reduxjs/toolkit';

export const appSurfaceSlice = createSlice({
  name: 'appSurface',
  initialState: {
    authModal: null,
  },

  reducers: {
    setAuthComonent: (state, action) => {
      state.authModal = action.payload;
    },
  },
});

export const { setAuthComonent } = appSurfaceSlice.actions;

export default appSurfaceSlice.reducer;
