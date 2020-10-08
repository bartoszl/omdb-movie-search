import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CountText = styled.p`
  color: white;
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 0;
`;

const CountDisplay = ({ count }) => (
  <CountText>
    { `Found ${count} movies.`}
  </CountText>
);

CountDisplay.propTypes = {
  count: PropTypes.number,
};

CountDisplay.defaultProps = {
  count: 0,
};

export default CountDisplay;
