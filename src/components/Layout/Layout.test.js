import React from 'react';
import { render, cleanup, screen } from '../../testUtils';
import Layout from './Layout';
import useFilters from '../../hooks/useFilters';
import { getError } from '../../selectors/movies';

jest.mock('../../selectors/movies');
jest.mock('../../hooks/useFilters');
jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => jest.fn(),
}));

describe('InfoLabel', () => {
  const s = 'Text';
  const content = 'content';

  getError.mockReturnValue(undefined);

  afterEach(() => {
    cleanup();
  });

  test('renders search container', () => {
    useFilters.mockReturnValue({
      filters: {
        s,
      },
    });

    render((
      <Layout>
        { content }
      </Layout>
    ));

    const searchContainer = screen.findByTestId('search-container');
    expect(searchContainer).toBeTruthy();
  });

  test('renders content', () => {
    useFilters.mockReturnValue({
      filters: {
        s,
      },
    });

    render((
      <Layout>
        { content }
      </Layout>
    ));

    const searchContainer = screen.findByText(content);
    expect(searchContainer).toBeTruthy();
  });

  test('renders search form', () => {
    useFilters.mockReturnValue({
      filters: {
        s: undefined,
      },
    });

    render((
      <Layout>
        { content }
      </Layout>
    ));

    const searchContainer = screen.findByTestId('search-form');
    expect(searchContainer).toBeTruthy();
  });

  test('renders text if no search', () => {
    useFilters.mockReturnValue({
      filters: {
        s: undefined,
      },
    });

    render((
      <Layout>
        { content }
      </Layout>
    ));

    const searchContainer = screen.findByTestId('typing-animation');
    expect(searchContainer).toBeTruthy();
  });
});
