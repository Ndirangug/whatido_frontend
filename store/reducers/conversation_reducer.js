import { createSlice } from '@reduxjs/toolkit';
import {
  filterDuplicatesById,
  reduceDuplicateArray
} from '../actions/helper';

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState: {
    allConversations: [],
  },
  reducers: {
    ADD_ALL_CONVERSATION: (state, action) => {
      let fetchedAllConversation = [
        ...state.allConversations,
        ...action.payload,
      ];
      state.allConversations = reduceDuplicateArray(
        fetchedAllConversation)
    },
    DELETE_All_CONVERSATION: (state, action) => {
      const allConversationId = action.payload._id;
      state.allConversations = [
        ...filterDuplicatesById(state.allConversations, allConversationId),
        action.payload,
      ];
    },
    FETCH_ALL_CONVERSATIONS: (state, action) => {
      const deleteId = action.payload._id;
      state.allConversations = [
        ...filterDuplicatesById(state.allConversations, deleteId),
      ];
    }
  }
})


export const {
  ADD_ALL_CONVERSATION,
  DELETE_All_CONVERSATION,
  FETCH_ALL_CONVERSATIONS
}
  = conversationSlice.actions;

export default conversationSlice.reducer; 
