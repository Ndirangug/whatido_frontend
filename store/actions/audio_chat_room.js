export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS',
  CREATE_ROOM = 'CREATE_ROOM',
  ADD_PARTICIPANT = 'ADD_PARTICIPANT',
  PARTICIPANT_LEFT = 'PARTICIPANT_LEFT',
  ROOM_CREATED = 'ROOM_CREATED',
  CREATING_ROOM = 'CREATING_ROOM',
  ATTACH_MEDIA_STREAM = 'ATTACH_MEDIA_STREAM',
  RAISE_HAND = 'RAISE_HAND',
  CLEAR_ROOM = 'CLEAR_ROOM',
  TOGGLE_MUTE_AUDIO = 'TOGGLE_MUTE_AUDIO',
  TOGGLE_USER_MUTE_AUDIO = 'TOGGLE_USER_MUTE_AUDIO',
  UPDATE_USER_AUDIO_ROOM_ROLE = 'UPDATE_USER_AUDIO_ROOM_ROLE',
  UPDATE_HOST_CONTROLS = 'UPDATE_HOST_CONTROLS',
  ADD_TO_WAITLIST = 'ADD_TO_WAITLIST',
  REMOVE_FROM_WAITLIST = 'REMOVE_FROM_WAITLIST',
  UPDATE_SOCKET_ID = 'UPDATE_SOCKET_ID',
  SET_CONNECTING = 'SET_CONNECTING',
  TOGGLE_RECORDING = 'TOGGLE_RECORDING',
  SET_RECORDING_URL = 'SET_RECORDING_URL',
  SET_SHOW_RECORDING_MINIPLAYER = 'SET_SHOW_RECORDING_MINIPLAYER',
  UPDATE_ROOMS_LIST = 'UPDATE_ROOMS_LIST';

export const createRoom = (room) => ({
  type: CREATE_ROOM,
  payload: room,
});

export const clearRoom = () => ({
  type: CLEAR_ROOM,
});

export const addParticipant = (participant) => ({
  type: ADD_PARTICIPANT,
  payload: participant,
});

export const removeParticipant = (participant) => ({
  type: PARTICIPANT_LEFT,
  payload: participant,
});

export const setRoomCreated = (roomCreated) => ({
  type: ROOM_CREATED,
  payload: roomCreated,
});

export const setCreatingRoom = (creatingRoom) => ({
  type: CREATING_ROOM,
  payload: creatingRoom,
});

export const attachMediaStream = (peerId, stream) => ({
  type: ATTACH_MEDIA_STREAM,
  payload: { peerId, stream },
});

export const raiseHand = (userId, handRaised, self) => ({
  type: RAISE_HAND,
  payload: { userId, handRaised, self },
});

export const toggleMuteAudio = () => ({
  type: TOGGLE_MUTE_AUDIO,
});

export const toggleUserMuteAudio = (userId, isMuted) => ({
  type: TOGGLE_USER_MUTE_AUDIO,
  payload: { userId, isMuted },
});

export const updateUserAudioRoomRole = (userId, role) => ({
  type: UPDATE_USER_AUDIO_ROOM_ROLE,
  payload: { userId, role },
});

export const updateHostControls = (isEnabled) => ({
  type: UPDATE_HOST_CONTROLS,
  payload: { isEnabled },
});

export const addToWaitlist = (user) => ({
  type: ADD_TO_WAITLIST,
  payload: user,
});

export const updateSocketId = (socketId) => ({
  type: UPDATE_SOCKET_ID,
  payload: socketId,
});

export const removeFromWaitlist = (user) => ({
  type: REMOVE_FROM_WAITLIST,
  payload: user,
});

// rooms page action
export const updateRoomsList = (roomsList) => ({
  type: UPDATE_ROOMS_LIST,
  payload: roomsList,
});

export const setConnecting = (isConnecting) => ({
  type: SET_CONNECTING,
  payload: isConnecting,
});

export const toggleRecording = (isRecording) => ({
  type: TOGGLE_RECORDING,
  payload: isRecording,
});

export const setRecordingUrl = (recordingUrl) => ({
  type: SET_RECORDING_URL,
  payload: recordingUrl,
});

export const showRecordingMiniplayer = (showRecordingMiniplayer) => ({
  type: SET_SHOW_RECORDING_MINIPLAYER,
  payload: showRecordingMiniplayer,
});
