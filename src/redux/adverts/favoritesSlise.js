import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    list: [],
    checkedFavorite: {},
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.list.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      const advertId = action.payload.id;
      state.list = state.list.filter(el => el.id !== advertId);
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
