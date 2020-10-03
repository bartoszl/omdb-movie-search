import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MovieContainer = styled.div`
  margin: 4px 8px 16px 8px;
  width: 248px;
  padding: 4px;
  border-radius: 3px;
  background-color: black;
  color: white;
  box-shadow: 0 0 5px 1px #aaa;
`;

const MoviePoster = styled.img`
  width: 100%;
  height: auto;
`;

const Movie = ({ imgSrc, title }) => (
  <MovieContainer>
    <MoviePoster src={imgSrc} alt={title} />
    <h4>
      { title }
    </h4>
  </MovieContainer>
);

Movie.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movie;
