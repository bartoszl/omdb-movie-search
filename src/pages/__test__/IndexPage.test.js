import React from 'react';
import { render, cleanup, screen } from '../../testUtils';
import IndexPage from '../IndexPage';

import { getMovies } from '../../api/movies';

jest.mock('../../api/movies');

describe('IndexPage', () => {
  afterEach(() => {
    cleanup();
  });

  test('matches snapshot', () => {
    getMovies.mockResolvedValue([]);

    render((
      <IndexPage />
    ));

    const search = screen.findByPlaceholderText('Search...');

    expect(search).toBeTruthy();
  });
});
