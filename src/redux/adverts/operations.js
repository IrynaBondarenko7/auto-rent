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

const FetchFiltrAdverts = async (params, thunkAPI) => {
  const { page, make, rentalPrice, minMileage, maxMileage } = params;
  const queryParams = [];

  if (make) {
    queryParams.push(`make=${make}`);
  }

  if (rentalPrice) {
    queryParams.push(`rentalPrice=${rentalPrice}`);
  }

  if (minMileage || maxMileage) {
    queryParams.push(`mileage=${minMileage || maxMileage}`);
  }

  try {
    const queryString = queryParams.join('&');
    const response = await axios.get(
      `/adverts?&page=${page}&limit=8&${queryString}`
    );
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

export const FiltrAdverts = createAsyncThunk(
  'adverts/filtrAdverts',
  FetchFiltrAdverts
);

export const fetchAllAdverts = createAsyncThunk(
  'adverts/fetchAllAdverts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
