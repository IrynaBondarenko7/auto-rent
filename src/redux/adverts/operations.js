import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6477a11a9233e82dd53bf54e.mockapi.io';

const loadAdverts = async (params, thunkAPI) => {
  const { page, signal } = params;
  try {
    const response = await axios.get(`/adverts?&page=${page}&limit=8`, {
      signal,
    });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  loadAdverts
);

export const loadMoreAdverts = createAsyncThunk(
  'adverts/loadMoreAdverts',
  loadAdverts
);
