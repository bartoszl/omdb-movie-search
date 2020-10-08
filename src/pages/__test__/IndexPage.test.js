import React from 'react';
import { render, cleanup, screen } from '../../testUtils';
import IndexPage from '../IndexPage';

import { getMovies } from '../../api/movies';

jest.mock('../../api/movies');

describe('IndexPage', () => {
  beforeEach(() => {
    render((
      <IndexPage />
    ));
  });

  afterEach(() => {
    cleanup();
  });

  test('Search Bar is visible', () => {
    getMovies.mockResolvedValue([]);

    const search = screen.findByPlaceholderText('Search...');

    expect(search).toBeTruthy();
  });
});
