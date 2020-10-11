import React from 'react';
import { render, cleanup } from '../../testUtils';
import Loader from './Loader';

describe('Loader', () => {
  afterEach(() => {
    cleanup();
  });

  test('matches snapshot', () => {
    const { asFragment } = render((
      <Loader isLoading />
    ));

    expect(asFragment()).toMatchSnapshot();
  });
});
