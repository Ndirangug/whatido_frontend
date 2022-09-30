import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './slice/user_reducer';

const reducers = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});

export default store;
