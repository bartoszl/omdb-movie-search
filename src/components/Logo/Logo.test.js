import React from 'react';
import { render, cleanup } from '../../testUtils';
import Logo from './Logo';

describe('Logo', () => {
  afterEach(() => {
    cleanup();
  });

  test('matches snapshot', () => {
    const { asFragment } = render((
      <Logo />
    ));

    expect(asFragment()).toMatchSnapshot();
  });
});
