import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import authReducer from './reducers/auth_reducer';
import mediaReducer from './reducers/media_reducer';

const reducers = combineReducers({
  auth: authReducer,
  media: mediaReducer,
});

const store = configureStore({
  reducer: reducers,
  // middleware: [thunk],
});

export default store;
