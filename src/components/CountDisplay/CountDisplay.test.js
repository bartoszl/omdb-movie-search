import React from 'react';
import { render, cleanup, screen } from '../../testUtils';
import CountDisplay from './CountDisplay';

describe('CountDisplay', () => {
  const count = 1;

  afterEach(() => {
    cleanup();
  });

  test('dislpays 0 as default count', () => {
    render((
      <CountDisplay count={count} />
    ));

    const text = screen.findByText('Found 0 movies.');

    expect(text).toBeTruthy();
  });

  test('dislpays correct count', () => {
    render((
      <CountDisplay count={count} />
    ));

    const text = screen.findByText(`Found ${count} movies.`);

    expect(text).toBeTruthy();
  });

  test('matches snapshot', () => {
    const { asFragment } = render((
      <CountDisplay count={count} />
    ));

    expect(asFragment()).toMatchSnapshot();
  });
});
