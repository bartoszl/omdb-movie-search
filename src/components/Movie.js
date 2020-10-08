import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SHADOW, BACKGROUND_GREY } from '../constants/colors';
import { SINGLE_MOVIE_URL } from '../constants/routes';

const MovieContainer = styled(Link)`
  margin: 4px 8px 16px 8px;
  width: 248px;
  padding: 4px;
  border-radius: 3px;
  background-color: ${BACKGROUND_GREY};
  color: white;
  box-shadow: 0 0 5px 1px ${SHADOW};
  transition: all 0.25s;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 7px 2px ${SHADOW};
    padding: 8px;
    margin: 0px 4px 12px 4px;
  }
`;

const MoviePoster = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h4`
  margin-top: 0.75rem;
  margin-bottom: 0.25rem;
`;

const Year = styled.h5`
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
`;

const Movie = ({
  imgSrc, title, year, id,
}) => (
  <MovieContainer to={SINGLE_MOVIE_URL.replace(':id', id)}>
    <MoviePoster src={imgSrc} alt={title} />
    <Title>
      { title }
    </Title>
    <Year>
      { year }
    </Year>
  </MovieContainer>
);

Movie.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Movie;
