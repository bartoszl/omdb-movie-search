import React from 'react';
import { render, cleanup } from '../../testUtils';
import InfoLabel from './InfoLabel';

describe('InfoLabel', () => {
  const text = 'Label';

  afterEach(() => {
    cleanup();
  });

  test('matches snapshot', () => {
    const { asFragment } = render((
      <InfoLabel>
        { text }
      </InfoLabel>
    ));

    expect(asFragment()).toMatchSnapshot();
  });
});
