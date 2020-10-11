import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InfoLabel from '../InfoLabel';

const RatingList = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  margin-top: 0;
`;

const Header = styled.h4`
  margin-bottom: 0.5rem;
`;

const Rating = styled.li`
  margin-bottom: 0.25rem;
`;

const Ratings = ({ ratings }) => (
  <div>
    <Header> Ratings: </Header>
    <RatingList>
      { ratings && ratings.map((rating) => (
        <Rating key={rating.Source}>
          <InfoLabel>
            { `${rating.Source}: ` }
          </InfoLabel>
          { rating.Value }
        </Rating>
      ))}
    </RatingList>
  </div>
);

Ratings.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.shape({
    Source: PropTypes.string.isRequired,
    Value: PropTypes.string.isRequired,
  })).isRequired,
};

export default Ratings;
