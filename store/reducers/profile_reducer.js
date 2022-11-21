import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    editableProfile: {
      cover: { url: '', file: null },
      avatar: { url: '', file: null },
      fullName: '',
      headline: '',
      nationality: '',
      currentLocation: '',
      community: {},
      expertise: [],
      additionalLink: [{ linkName: '', url: '' }],
    },
  },

  reducers: {
    setEditableProfile: (state, action) => {
      state.editableProfile = { ...state.editableProfile, ...action.payload };
    },
  },
});

export const { setEditableProfile } = profileSlice.actions;

export default profileSlice.reducer;
