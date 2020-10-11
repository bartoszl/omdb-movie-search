import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as api from '../../api/movies';
import {
  getMovies, getMovieById,
} from '../movies';
import moviesSuccess from '../../__apiMocks__/movies/getListSuccess';
import moviesFailure from '../../__apiMocks__/movies/getListFailure';
import singleMovieSuccess from '../../__apiMocks__/movies/getSingleSuccess';
import singleMovieFailure from '../../__apiMocks__/movies/getSingleFailure';

jest.mock('../../api/movies');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions/movie', () => {
  describe('getMovies', () => {
    const filters = { s: 'movie' };

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('calls correct action creators on success', async () => {
      api.getMovies.mockResolvedValueOnce(moviesSuccess);

      const store = mockStore({ });

      const { meta: { requestId } } = await store.dispatch(getMovies(filters));

      const expectedActions = [
        getMovies.pending(requestId, filters),
        getMovies.fulfilled({
          records: moviesSuccess.Search,
          count: moviesSuccess.totalResults,
        }, requestId, filters),
      ];

      expect(store.getActions()).toEqual(expectedActions);
    });

    it('calls correct action creators on failure', async () => {
      api.getMovies.mockRejectedValueOnce(moviesFailure);

      const store = mockStore({});

      const { meta: { requestId } } = await store.dispatch(getMovies(filters));

      const expectedActions = [
        getMovies.pending(requestId, filters),
        getMovies.rejected({
          error: moviesFailure.Error,
        }, requestId, filters),
      ];

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('getMovieById', () => {
    const id = '123';

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('calls correct action creators on success', async () => {
      api.getMovieById.mockResolvedValueOnce(singleMovieSuccess);

      const store = mockStore({});

      const { meta: { requestId } } = await store.dispatch(getMovieById(id));

      const expectedActions = [
        getMovieById.pending(requestId, id),
        getMovieById.fulfilled({
          record: singleMovieSuccess,
        }, requestId, id),
      ];

      expect(store.getActions()).toEqual(expectedActions);
    });

    it('calls correct action creators on failure', async () => {
      api.getMovieById.mockRejectedValueOnce(singleMovieFailure);

      const store = mockStore({});

      const { meta: { requestId } } = await store.dispatch(getMovieById(id));

      const expectedActions = [
        getMovieById.pending(requestId, id),
        getMovieById.rejected({
          error: singleMovieFailure.Error,
        }, requestId, id),
      ];

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
