import React from 'react';
import { render, cleanup, screen } from '../../testUtils';
import Movie from './Movie';

describe('InfoLabel', () => {
  const title = 'Title';
  const imgSrc = 'www.image.pl';
  const year = '1993';

  beforeEach(() => {
    render((
      <Movie
        title={title}
        imgSrc={imgSrc}
        year={year}
        to="asd"
      />
    ));
  });

  afterEach(() => {
    cleanup();
  });

  it('renders title', () => {
    expect(screen.getByText(title)).toBeTruthy();
  });

  it('renders year', () => {
    expect(screen.getByText(year)).toBeTruthy();
  });

  it('renders poster', () => {
    expect(screen.getByAltText(title)).toBeTruthy();
  });

  it('matches snapshot', () => {
    const { asFragment } = render((
      <Movie
        title={title}
        imgSrc={imgSrc}
        year={year}
        to="asd"
      />
    ));

    expect(asFragment()).toMatchSnapshot();
  });
});
