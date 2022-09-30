import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth_reducer';

const reducers = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});

export default store;
