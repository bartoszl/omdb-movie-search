import {
  getMovies, getMovieById,
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
        records: [],
        error: null,
      });
    });

    it('returns correct state on fulfilled', () => {
      const payload = {
        records: [{ record: 'asd' }],
      };

      expect(reducer(initialState, {
        type: getMovies.fulfilled.type,
        payload,
      })).toEqual({
        ...initialState,
        isLoading: false,
        records: payload.records,
        error: null,
      });
    });

    it('returns correct state on rejected', () => {
      const error = 'err';

      expect(reducer(initialState, {
        type: getMovies.rejected.type,
        payload: error,
      })).toEqual({
        ...initialState,
        isLoading: false,
        records: [],
        error,
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
      const error = 'err';

      expect(reducer(initialState, {
        type: getMovieById.rejected.type,
        payload: error,
      })).toEqual({
        ...initialState,
        isLoading: false,
        record: {},
        error,
      });
    });
  });
});
