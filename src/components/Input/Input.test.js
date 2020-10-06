import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  afterEach(() => {
    cleanup();
  });

  test('matches snapshot', () => {
    const { asFragment } = render((
      <Input name="test" placholder="Search..." />
    ));

    expect(asFragment()).toMatchSnapshot();
  });
});
