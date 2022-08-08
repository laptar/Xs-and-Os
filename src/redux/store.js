import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { reducer } from './reducer';
import { newSteap } from './middleware';

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware().concat(newSteap),
});
