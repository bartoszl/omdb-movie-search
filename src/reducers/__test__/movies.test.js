import {
  getMovies, getMovieById, clearMovies,
} from '../../actions/movies';
import reducer, { initialState } from '../movies';

describe('Movies reducer', () => {
  describe('getMovies', () => {
    it('returns correct state on pending', () => {
      expect(reducer(initialState, {
        type: getMovies.pending.type,
      })).toEqual({
        ...initialState,
        isLoading: true,
        error: null,
        count: 0,
      });
    });

    it('returns correct state on fulfilled', () => {
      const payload = {
        records: [{ record: 'asd' }],
        count: 123,
      };

      expect(reducer(initialState, {
        type: getMovies.fulfilled.type,
        payload,
      })).toEqual({
        ...initialState,
        isLoading: false,
        records: payload.records,
        error: null,
        count: payload.count,
      });
    });

    it('returns correct state on rejected', () => {
      const error = {
        error: 'err',
      };

      expect(reducer(initialState, {
        type: getMovies.rejected.type,
        payload: error,
      })).toEqual({
        ...initialState,
        isLoading: false,
        records: [],
        error: error.error,
        count: 0,
      });
    });
  });

  describe('getMovieById', () => {
    it('returns correct state on pending', () => {
      expect(reducer(initialState, {
        type: getMovieById.pending.type,
      })).toEqual({
        ...initialState,
        isLoading: true,
        record: {},
        error: null,
      });
    });

    it('returns correct state on fulfilled', () => {
      const payload = {
        record: {
          a: 'b',
        },
      };

      expect(reducer(initialState, {
        type: getMovieById.fulfilled.type,
        payload,
      })).toEqual({
        ...initialState,
        isLoading: false,
        record: payload.record,
        error: null,
      });
    });

    it('returns correct state on rejected', () => {
      const error = {
        error: 'err',
      };

      expect(reducer(initialState, {
        type: getMovieById.rejected.type,
        payload: error,
      })).toEqual({
        ...initialState,
        isLoading: false,
        record: {},
        error: error.error,
      });
    });
  });

  describe('clearMovies', () => {
    it('return correct state', () => {
      expect(reducer(initialState, {
        type: clearMovies.type,
      })).toEqual({
        ...initialState,
        records: [],
      });
    });
  });
});
