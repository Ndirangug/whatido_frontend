import { createSlice } from '@reduxjs/toolkit';

const feedSlice = createSlice({
  name: 'feed',
  initialState: {
    feedModal: false,
    media: null,
  },
  reducers: {
    setFeedModal: (state, action) => {
      state.feedModal = action.payload;
    },
    setMedia: (state, action) => {
      state.media = action.payload;
    },
  },
});

export const { setFeedModal, setMedia } = feedSlice.actions;

export default feedSlice.reducer;
