import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import audioChatRoomReducer from './reducers/audio_chat_room_reducer';
import authReducer from './reducers/auth_reducer';
import categoryReducer from './reducers/category_page_reducer';
import exploreReducer from './reducers/explore_reducer';
import mediaReducer from './reducers/media_reducer';

const reducers = combineReducers({
  auth: authReducer,
  media: mediaReducer,
  explore: exploreReducer,
  category: categoryReducer,
  audioRoom: audioChatRoomReducer,
});

const store = configureStore({
  reducer: reducers,
  // middleware: [thunk],
});

export default store;
