import { createSlice } from '@reduxjs/toolkit';
import { flattenArray } from '../actions/messenger_actions';

export const messengerSlice = createSlice({
  name: 'messenger',
  initialState: {
    messages: [],
  },

  reducers: {
    setMessageData: (state, action) => {
      const flatArray = flattenArray(action.payload);

      state.messages = flatArray;
    },
  },
});

export const { setMessageData } = messengerSlice.actions;

export default messengerSlice.reducer;
