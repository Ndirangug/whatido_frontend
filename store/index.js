import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appSurfaceReducer from './reducers/app_surface_reducer';
import authReducer from './reducers/auth_reducer';
import categoryReducer from './reducers/category_page_reducer';
import exploreReducer from './reducers/explore_reducer';
import mediaReducer from './reducers/media_reducer';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['appSurface'],
};

const reducers = combineReducers({
  auth: authReducer,
  media: mediaReducer,
  explore: exploreReducer,
  category: categoryReducer,
  appSurface: appSurfaceReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

export let persistor = persistStore(store);
