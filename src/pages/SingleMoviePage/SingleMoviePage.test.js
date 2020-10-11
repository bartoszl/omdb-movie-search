import React from 'react';
import { useParams } from 'react-router-dom';
import {
  render, cleanup, screen, fireEvent,
} from '../../testUtils';
import SingleMoviePage from '.';

import { getMovieById } from '../../actions/movies';
import { getSingleMovie, getIsLoadingFlag } from '../../selectors/movies';
import getSingleSuccess from '../../__apiMocks__/movies/getSingleSuccess';

jest.mock('../../actions/movies');
jest.mock('../../selectors/movies');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));
jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => jest.fn(),
}));

describe('SingleMoviePage', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('calls getMovieById on load', () => {
    getSingleMovie.mockReturnValueOnce(getSingleSuccess);
    getIsLoadingFlag.mockReturnValueOnce(false);

    const id = 'asd123';

    useParams.mockReturnValue({ id });

    render((
      <SingleMoviePage />
    ));

    expect(getMovieById).toHaveBeenCalledTimes(1);
    expect(getMovieById).toHaveBeenCalledWith(id);
  });

  it('renders loader if is loading', () => {
    getSingleMovie.mockReturnValueOnce(getSingleSuccess);
    getIsLoadingFlag.mockReturnValueOnce(true);

    render((
      <SingleMoviePage />
    ));

    expect(screen.getByTestId('loader-container')).toBeTruthy();
  });
});
