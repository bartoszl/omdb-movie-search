import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BACKGROUND_GREY } from '../../constants/colors';

const MovieContainer = styled(Link)`
  margin: 4px 8px 16px 8px;
  width: 248px;
  padding: 4px;
  border-radius: 3px;
  background-color: ${BACKGROUND_GREY};
  color: white;
  box-shadow: ${({ theme }) => theme.shadow.small};
  transition: all 0.25s;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.large};
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
  imgSrc, title, year, to,
}) => (
  <MovieContainer to={to}>
    <MoviePoster src={imgSrc} alt={title} />
    <div>
      <Title>
        { title }
      </Title>
      <Year>
        { year }
      </Year>
    </div>
  </MovieContainer>
);

Movie.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Movie;
