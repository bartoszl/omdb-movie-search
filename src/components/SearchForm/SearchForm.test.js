import React from 'react';
import {
  render, cleanup, screen, fireEvent, act,
} from '../../testUtils';
import SearchForm from './SearchForm';
import useFilters from '../../hooks/useFilters';
import { INDEX_URL } from '../../constants/routes';
import { getError } from '../../selectors/movies';

jest.mock('../../hooks/useFilters');
jest.mock('../../selectors/movies');

jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => jest.fn(),
}));

describe('SearchForm', () => {
  afterEach(() => {
    cleanup();
  });

  test('calls correct function on submit', async () => {
    const value = 'search';

    getError.mockReturnValueOnce(undefined);
    const navigateWithSearchQuery = jest.fn();
    useFilters.mockReturnValue({
      navigateWithSearchQuery,
    });

    render((
      <SearchForm />
    ));

    const searchForm = screen.getByTestId('search-form');

    const searchInput = screen.getByTestId('search-input');

    fireEvent.change(searchInput, { target: { value } });

    await act(async () => {
      fireEvent.submit(searchForm);
    });

    expect(navigateWithSearchQuery).toHaveBeenCalledTimes(1);
    expect(navigateWithSearchQuery).toHaveBeenCalledWith({ s: value }, INDEX_URL);
  });

  test('sets default values correctly', async () => {
    const value = 'search';
    getError.mockReturnValueOnce(undefined);

    render((
      <SearchForm defaultValues={{ s: value }} />
    ));

    const searchInput = screen.getByTestId('search-input');

    expect(searchInput.value).toBe(value);
  });
});
