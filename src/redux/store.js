import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { advertsReducer } from './adverts/advertsSlice';
import { favoritesSlice } from './adverts/favoritesSlise';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const favoritePersistConfig = {
  key: 'favorite',
  storage,
};

export const store = configureStore({
  reducer: {
    favorites: persistReducer(favoritePersistConfig, favoritesSlice.reducer),
    adverts: advertsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
