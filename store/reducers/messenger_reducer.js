import { createSlice } from '@reduxjs/toolkit';

export const messengerSlice = createSlice({
  name: 'messenger',
  initialState: {
    messages: [],
  },

  reducers: {
    setMessageData: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { setMessageData } = messengerSlice.actions;

export default messengerSlice.reducer;
