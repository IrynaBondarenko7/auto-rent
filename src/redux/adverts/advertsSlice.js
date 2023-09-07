import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

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
  // state.cars = action.payload;
  state.cars = state.cars.concat(action.payload);
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    cars: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, pendingReducer)
      .addCase(fetchAdverts.fulfilled, fetchAdvertsFulfilledReducer)
      .addCase(fetchAdverts.rejected, rejectedReducer);
  },
});

export const advertsReducer = advertsSlice.reducer;
