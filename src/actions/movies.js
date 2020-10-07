import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api/movies';

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

export const getMovies = createAsyncThunk(
  'GET_MOVIE_LIST',
  async (params, { rejectWithValue }) => {
    const data = await api.getMovies(params);

    await wait(3000);

    if (data.Response === 'False') {
      return rejectWithValue(data.Error);
    }

    return {
      records: data.Search,
    };
  },
);
