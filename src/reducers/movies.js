import { createReducer } from '@reduxjs/toolkit';
import {
  getMovies,
} from '../actions/movies';

export const initialState = {
  isLoading: false,
  records: [],
};

const reducer = createReducer(initialState, (builder) => builder
  .addCase(getMovies.pending, (state) => ({
    ...state,
    isLoading: true,
    records: [],
  }))
  .addCase(getMovies.fulfilled, (state, action) => ({
    ...state,
    records: action.payload.records,
    isLoading: false,
  }))
  .addCase(getMovies.rejected, (state, action) => ({
    ...state,
    isLoading: false,
    records: [],
    error: action.payload,
  })));

export default reducer;
