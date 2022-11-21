/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import {authReducer, appReducer} from './reducers/';

const store = configureStore({
  reducer: {
    authReducer,
    appReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
