import React from 'react';
import { render, cleanup } from '../../testUtils';
import LoadMoreButton from './LoadMoreButton';

describe('Loader', () => {
  afterEach(() => {
    cleanup();
  });

  test('matches snapshot', () => {
    const { asFragment } = render((
      <LoadMoreButton />
    ));

    expect(asFragment()).toMatchSnapshot();
  });
});
