import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    list: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const advertId = action.payload;
      if (!state.list.includes(advertId)) {
        state.list.push(advertId);
      }
    },
    removeFromFavorites: (state, action) => {
      const advertId = action.payload;
      state.list = state.list.filter(id => id !== advertId);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
