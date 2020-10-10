// eslint-disable-next-line import/no-extraneous-dependencies
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as api from '../../api/movies';
import {
  getMovies, getMovieById,
} from '../movies';

jest.mock('../api/movies');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions/movie', () => {
  describe('getMovies', () => {
    const filters = { s: 'movie' };

    it('calls correct action creators on success', async () => {
      const returnValue = {
        value: {
          name: 'A Master',
        },
        '@odata.count': 123,
        meta: {},
      };

      // @ts-ignore
      api.getMasterCategories.mockResolvedValue(returnValue);

      const store = mockStore({ todos: [] });

      // @ts-ignore
      const { meta: { requestId } } = await store.dispatch(getMovies(filters));

      const expectedActions = [
        getMovies.pending(requestId, filters),
        getMovies.fulfilled({
          records: returnValue.value,
          count: returnValue['@odata.count'],
          meta: returnValue.meta,
        }, requestId, filters),
      ];

      expect(store.getActions()).toEqual(expectedActions);
    });

    it('calls correct action creators on failure', async () => {
      const returnValue = { name: 'A Master' };

      // @ts-ignore
      api.getMasterCategories.mockRejectedValue(returnValue);

      const store = mockStore({});

      // @ts-ignore
      const { meta: { requestId } } = await store.dispatch(getMovies(filters));

      const expectedActions = [
        getMovies.pending(requestId, filters),
        getMovies.rejected(returnValue, requestId, filters),
      ];

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('getMovieById', () => {
    it('calls correct action creators on success', async () => {
      const returnValue = { name: 'A Master' };
      const id = '123';

      // @ts-ignore
      api.getMasterCategoryById.mockResolvedValue(returnValue);

      const store = mockStore({ todos: [] });

      // @ts-ignore
      const { meta: { requestId } } = await store.dispatch(getMovieById(id));

      const expectedActions = [
        getMovieById.pending(requestId, id),
        getMovieById.fulfilled(returnValue, requestId, id),
      ];

      expect(store.getActions()).toEqual(expectedActions);
    });

    it('calls correct action creators on failure', async () => {
      const returnValue = { name: 'A Master' };
      const id = '123';

      // @ts-ignore
      api.getMasterCategoryById.mockRejectedValue(returnValue);

      const store = mockStore({ todos: [] });

      // @ts-ignore
      const { meta: { requestId } } = await store.dispatch(getMovieById(id));

      const expectedActions = [
        getMovieById.pending(requestId, id),
        getMovieById.rejected(returnValue, requestId, id),
      ];

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
