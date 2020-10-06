import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  const text = 'Button';

  afterEach(() => {
    cleanup();
  });

  test('matches snapshot', () => {
    const { asFragment } = render((
      <Button>
        { text }
      </Button>
    ));

    expect(asFragment()).toMatchSnapshot();
  });
});
