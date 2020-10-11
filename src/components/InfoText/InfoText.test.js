import React from 'react';
import { render, cleanup } from '../../testUtils';
import InfoText from './InfoText';

describe('InfoLabel', () => {
  const text = 'Text';
  const label = 'Label';

  afterEach(() => {
    cleanup();
  });

  test('matches snapshot', () => {
    const { asFragment } = render((
      <InfoText label={label}>
        { text }
      </InfoText>
    ));

    expect(asFragment()).toMatchSnapshot();
  });
});
