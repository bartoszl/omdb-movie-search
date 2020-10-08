import { initialState } from '../reducers/movies';

export const getMoviesState = (
  state,
) => state.movies || initialState;

export const getMovieList = (
  state,
) => getMoviesState(state).records;

export const getIsLoadingFlag = (
  state,
) => getMoviesState(state).isLoading;

export const getCount = (
  state,
) => getMoviesState(state).count;
