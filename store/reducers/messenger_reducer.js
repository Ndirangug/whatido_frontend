import { createSlice } from '@reduxjs/toolkit';
import {
  filterDuplicatesById,
  flattenArray,
} from '../actions/messenger_actions';

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
    addMessageData: (state, action) => {
      const messageId = action.payload._id;
      const messageArray = [
        ...filterDuplicatesById(state.messages, messageId),
        action.payload,
      ];

      state.messages = messageArray;
    },
  },
});

export const { setMessageData, addMessageData } = messengerSlice.actions;

export default messengerSlice.reducer;
