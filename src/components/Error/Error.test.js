import React from 'react';
import { render, cleanup } from '../../testUtils';
import Error from './Error';

describe('Error', () => {
  const text = 'Error';

  afterEach(() => {
    cleanup();
  });

  test('matches snapshot', () => {
    const { asFragment } = render((
      <Error>
        { text }
      </Error>
    ));

    expect(asFragment()).toMatchSnapshot();
  });
});
