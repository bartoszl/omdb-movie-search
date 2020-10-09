import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
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
      count: data.totalResults,
    };
  },
);

export const getMovieById = createAsyncThunk(
  'GET_MOVIE_BY_ID',
  async (id, { rejectWithValue }) => {
    const data = await api.getMovieById(id);

    await wait(3000);

    if (data.Response === 'False') {
      return rejectWithValue(data.Error);
    }

    return {
      records: data.Search,
    };
  },
);

export const clearMovies = createAction('CLEAR_MOVIES');
