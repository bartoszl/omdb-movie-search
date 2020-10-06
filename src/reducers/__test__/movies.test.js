import {
  getMovies,
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
      });
    });

    it('returns correct state on rejected', () => {
      expect(reducer(initialState, {
        type: getMovies.rejected.type,
      })).toEqual({
        ...initialState,
        isLoading: false,
      });
    });
  });
});
