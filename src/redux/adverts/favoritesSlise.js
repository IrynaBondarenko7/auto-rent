import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    list: [],
    checkedFavorite: {},
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
    setCheckedFavorite: (state, action) => {
      const { advertId, isChecked } = action.payload;
      state.checkedFavorite = {
        ...state.checkedFavorite,
        [advertId]: isChecked,
      };
    },
  },
});

export const { addToFavorites, removeFromFavorites, setCheckedFavorite } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
