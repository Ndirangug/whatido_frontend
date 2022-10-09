import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import authReducer from './reducers/auth_reducer';
import conversation_reducer from './reducers/conversation_reducer';
import mediaReducer from './reducers/media_reducer';
import messenger_reducer from './reducers/messenger_reducer';

const reducers = combineReducers({
  auth: authReducer,
  media: mediaReducer,
    messenger: messenger_reducer,
  conversation: conversation_reducer

});

const store = configureStore({
  reducer: reducers,
  // middleware: [thunk],
});

export default store;
