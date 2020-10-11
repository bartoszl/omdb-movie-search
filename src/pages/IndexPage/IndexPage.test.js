import React from 'react';
import {
  render, cleanup, screen, fireEvent,
} from '../../testUtils';
import IndexPage from '.';

import { getMovies, clearMovies } from '../../actions/movies';
import { getMovieList, getIsLoadingFlag, getCount } from '../../selectors/movies';
import useFilters from '../../hooks/useFilters';
import getListSuccess from '../../__apiMocks__/movies/getListSuccess';

jest.mock('../../actions/movies');
jest.mock('../../selectors/movies');
jest.mock('../../hooks/useFilters');

jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => jest.fn(),
}));

describe('IndexPage', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('calls clear and getMovies if search is present', () => {
    getMovieList.mockReturnValueOnce([]);
    getIsLoadingFlag.mockReturnValueOnce(false);
    getCount.mockReturnValueOnce(0);
    const s = 'asd';

    useFilters.mockReturnValueOnce({
      filters: {
        s,
      },
    });

    render((
      <IndexPage />
    ));

    expect(getMovies).toHaveBeenCalledTimes(1);
    expect(clearMovies).toHaveBeenCalledTimes(1);
  });

  it('calls getMovies if load more is clicked', () => {
    getMovieList.mockReturnValueOnce([]);
    getIsLoadingFlag.mockReturnValueOnce(false);
    getCount.mockReturnValueOnce(1);

    useFilters.mockReturnValueOnce({
      filters: {},
    });

    render((
      <IndexPage />
    ));

    const loadMore = screen.getByTestId('load-more-button');

    fireEvent.click(loadMore);

    expect(getMovies).toHaveBeenCalledTimes(1);
  });

  it('renders movie list', () => {
    getMovieList.mockReturnValue(getListSuccess.Search);
    getIsLoadingFlag.mockReturnValue(false);
    getCount.mockReturnValue(Number(getListSuccess.totalResults) + 5);

    useFilters.mockReturnValue({
      filters: {},
      compileUrlWithQuery: () => 'hello',
    });

    render((
      <IndexPage />
    ));

    getListSuccess.Search.forEach((movie) => {
      const movieItem = screen.getByText(movie.Title);
      const moviePoster = screen.getByAltText(movie.Title);

      expect(moviePoster).toBeTruthy();
      expect(movieItem).toBeTruthy();
    });
  });

  it('displays count', () => {
    getMovieList.mockReturnValue(getListSuccess.Search);
    getIsLoadingFlag.mockReturnValue(false);
    getCount.mockReturnValue(getListSuccess.totalResults);

    useFilters.mockReturnValue({
      filters: {},
      compileUrlWithQuery: () => 'hello',
    });

    render((
      <IndexPage />
    ));

    expect(screen.getByText(`Found ${getListSuccess.totalResults} movies.`));
  });
});
