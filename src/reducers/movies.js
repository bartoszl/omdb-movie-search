import { createReducer } from '@reduxjs/toolkit';
import {
  getMovies, getMovieById, clearMovies,
} from '../actions/movies';

export const initialState = {
  isLoading: false,
  records: [],
  record: {},
  error: null,
  count: 0,
};

const reducer = createReducer(initialState, (builder) => builder
  .addCase(getMovies.pending, (state) => ({
    ...state,
    isLoading: true,
    // records: [],
    error: null,
    count: 0,
  }))
  .addCase(getMovies.fulfilled, (state, action) => ({
    ...state,
    records: [
      ...state.records,
      ...action.payload.records,
    ],
    isLoading: false,
    error: null,
    count: action.payload.count,
  }))
  .addCase(getMovies.rejected, (state, action) => ({
    ...state,
    isLoading: false,
    records: [],
    error: action.payload,
    count: 0,
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
  }))

  .addCase(clearMovies.type, (state) => ({
    ...state,
    records: [],
  })));

export default reducer;
