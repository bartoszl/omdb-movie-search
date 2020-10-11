import React from 'react';
import { render, cleanup } from '../../testUtils';
import MoviesList from './MoviesList';

describe('InfoLabel', () => {
  afterEach(() => {
    cleanup();
  });

  test('matches snapshot', () => {
    const { asFragment } = render((
      <MoviesList />
    ));

    expect(asFragment()).toMatchSnapshot();
  });
});
