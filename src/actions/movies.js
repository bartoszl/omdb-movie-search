import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import * as api from '../api/movies';

export const getMovies = createAsyncThunk(
  'GET_MOVIE_LIST',
  async (params, { rejectWithValue }) => {
    const data = await api.getMovies(params);

    if (data.Response === 'False') {
      return rejectWithValue({
        error: data.Error,
      });
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

    if (data.Response === 'False') {
      return rejectWithValue({
        error: data.Error,
      });
    }

    return {
      record: data,
    };
  },
);

export const clearMovies = createAction('CLEAR_MOVIES');
