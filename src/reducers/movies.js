import { createReducer } from '@reduxjs/toolkit';
import {
  getMovies, getMovieById,
} from '../actions/movies';

export const initialState = {
  isLoading: false,
  records: [],
  record: {},
  error: null,
};

const reducer = createReducer(initialState, (builder) => builder
  .addCase(getMovies.pending, (state) => ({
    ...state,
    isLoading: true,
    records: [],
    error: null,
  }))
  .addCase(getMovies.fulfilled, (state, action) => ({
    ...state,
    records: action.payload.records,
    isLoading: false,
    error: null,
  }))
  .addCase(getMovies.rejected, (state, action) => ({
    ...state,
    isLoading: false,
    records: [],
    error: action.payload,
  }))

  .addCase(getMovieById.pending, (state) => ({
    ...state,
    isLoading: true,
    record: {},
    error: null,
  }))
  .addCase(getMovieById.fulfilled, (state, action) => ({
    ...state,
    record: action.payload.record,
    isLoading: false,
    error: null,
  }))
  .addCase(getMovieById.rejected, (state, action) => ({
    ...state,
    isLoading: false,
    record: {},
    error: action.payload,
  })));

export default reducer;
