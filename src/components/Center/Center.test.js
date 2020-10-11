import React from 'react';
import { render, cleanup } from '../../testUtils';
import Center from './Center';

describe('Center', () => {
  const text = 'Center';

  afterEach(() => {
    cleanup();
  });

  test('matches snapshot', () => {
    const { asFragment } = render((
      <Center>
        { text }
      </Center>
    ));

    expect(asFragment()).toMatchSnapshot();
  });
});
