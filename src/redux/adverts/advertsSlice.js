import { createSlice } from '@reduxjs/toolkit';
import { FiltrAdverts, fetchAdverts, loadMoreAdverts } from './operations';

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchAdvertsFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.cars = action.payload;
};

const loadMoreAdvertsFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.cars = state.cars.concat(action.payload);
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    cars: [],
    isLoading: false,
    error: null,
    filtr: '',
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, pendingReducer)
      .addCase(fetchAdverts.fulfilled, fetchAdvertsFulfilledReducer)
      .addCase(fetchAdverts.rejected, rejectedReducer)
      .addCase(loadMoreAdverts.pending, pendingReducer)
      .addCase(loadMoreAdverts.fulfilled, loadMoreAdvertsFulfilledReducer)
      .addCase(loadMoreAdverts.rejected, rejectedReducer)
      .addCase(FiltrAdverts.pending, pendingReducer)
      .addCase(FiltrAdverts.fulfilled, fetchAdvertsFulfilledReducer)
      .addCase(FiltrAdverts.rejected, rejectedReducer);
  },
});

export const advertsReducer = advertsSlice.reducer;
