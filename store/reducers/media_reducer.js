import { createSlice } from '@reduxjs/toolkit';

export const mediaSlice = createSlice({
  name: 'media',
  initialState: {
    isFetchingMediaInfo: false,
    isUploading: false,
    previewComponent: 'DROPZONE',
    preUploadFile: {},
    error: null,
  },

  reducers: {
    setIsFetchingMediaInfo: (state, action) => {
      state.isFetchingMediaInfo = action.payload;
    },
    setMediaError: (state, action) => {
      state.error = action.payload;
    },

    setPreUploadFile: (state, action) => {
      state.preUploadFile = action.payload;
    },
    setMediaPreview: (state, action) => {
      state.previewComponent = action.payload;
    },
    setMediaUploading: (state, action) => {
      state.isUploading = action.payload;
    },
  },
});

export const {
  setIsFetchingMediaInfo,
  setMediaError,
  setPreUploadFile,
  setMediaPreview,
  setMediaUploading,
} = mediaSlice.actions;

export default mediaSlice.reducer;
