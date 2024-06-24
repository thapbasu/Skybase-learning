import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productReducer from './productSlide';

// Configuration for Redux Persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['products'], // specify the state to persist
};

const persistedReducer = persistReducer(persistConfig, productReducer);

const store = configureStore({
  reducer: {
    products: persistedReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // enable Redux DevTools in development
});

export const persistor = persistStore(store); // This creates a persistor object & kickstarts persistence

export default store;
