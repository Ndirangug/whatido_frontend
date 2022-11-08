import { createSlice } from '@reduxjs/toolkit';

const feedSlice = createSlice({
  name: 'feed',
  initialState: {
    shareModal: false,
    feedModal: false,
    media: null,
  },
  reducers: {
    setShareModal: (state, action) => {
      state.shareModal = action.payload;
    },
    setFeedModal: (state, action) => {
      state.feedModal = action.payload;
    },
    setMedia: (state, action) => {
      state.media = action.payload;
    },
  },
});

export const { setShareModal, setFeedModal, setMedia } = feedSlice.actions;

export default feedSlice.reducer;
