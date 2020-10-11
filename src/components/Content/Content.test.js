import React from 'react';
import { render, cleanup } from '../../testUtils';
import Content from './Content';

describe('Content', () => {
  const text = 'Content';

  afterEach(() => {
    cleanup();
  });

  test('matches snapshot', () => {
    const { asFragment } = render((
      <Content>
        { text }
      </Content>
    ));

    expect(asFragment()).toMatchSnapshot();
  });
});
