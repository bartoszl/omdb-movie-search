import React from 'react';
import { render, cleanup } from '../../testUtils';
import SearchContainer from './SearchContainer';

describe('InfoLabel', () => {
  afterEach(() => {
    cleanup();
  });

  test('matches snapshot', () => {
    const { asFragment } = render((
      <SearchContainer />
    ));

    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot collapsed', () => {
    const { asFragment } = render((
      <SearchContainer collapsed />
    ));

    expect(asFragment()).toMatchSnapshot();
  });
});
