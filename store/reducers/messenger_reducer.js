import { createSlice } from '@reduxjs/toolkit';
import { filterDuplicatesById, filterDuplicatesByMessageID, flattenArray, reduceDuplicateArray } from '../actions/helper';

export const messengerSlice = createSlice({
  name: 'messenger',
  initialState: {
    messages: [],
    sendingMessages: [],
    files: [],
    quote: null,
    onlineUsers: [],
  },
  reducers: {
    STORE_ONLINE_USER: (state, action) => {
      state.onlineUsers = action.payload

    },
    QUOTE_MESSAGE: (state, action) => {
      state.quote = action.payload

    },
    FETCH_CONVERSATION_MESSAGE: (state, action) => {
      state.messages = flattenArray(action.payload);

    },
    GET_CONVERSATION_MESSAGE: (state, action) => {
      let preConversationMessages = [...state.messages, ...action.payload];

      const conversationMessageArray = reduceDuplicateArray(
        preConversationMessages
      );
      state.messages = conversationMessageArray
    },
    ADD_CONVERSATION_MESSAGE: (state, action) => {
      const messageId = action.payload._id;
      state.messages = [
        ...filterDuplicatesById(state.messages, messageId),
        action.payload,
      ];
    },
    DELETE_CONVERSATION_MESSAGE: (state, action) => {
      const deleteMessageId = action.payload._id;
      state.messages = [
        ...filterDuplicatesById(state.messages, deleteMessageId),
      ];
    },
    ADD_SENDING_MESSAGE: (state, action) => {
      state.sendingMessages = action.payload;
    },
    REMOVE_SENDING_MESSAGE: (state, action) => {
      const removeSendingMessageId = action.payload.messageId;
      state.sendingMessages = [
        ...filterDuplicatesByMessageID(
          state.sendingMessages,
          removeSendingMessageId
        ),
      ];
    },
    ADD_MESSAGE_FILE: (state, action) => {
      state.files = action.payload;
    },
    REMOVE_MESSAGE_FILE: (state, action) => {
      const removeMessageFileId = action.payload._id;
      state.files = [
        ...filterDuplicatesById(state.files, removeMessageFileId),
      ];
    },

  }
})

export const {
  STORE_ONLINE_USER,
  QUOTE_MESSAGE,
  GET_CONVERSATION_MESSAGE,
  ADD_CONVERSATION_MESSAGE,
  DELETE_CONVERSATION_MESSAGE,
  ADD_SENDING_MESSAGE,
  REMOVE_SENDING_MESSAGE,
  ADD_MESSAGE_FILE,
  REMOVE_MESSAGE_FILE,
  FETCH_CONVERSATION_MESSAGE
} = messengerSlice.actions;

export default messengerSlice.reducer;