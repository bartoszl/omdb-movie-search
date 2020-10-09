import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { INDEX_URL } from '../../constants/routes';

const LogoContainer = styled(Link)`
  position: fixed;
  left: 2rem;
  top: 1.75rem;
  cursor: pointer;
`;

const Logo = () => (
  <LogoContainer to={INDEX_URL}>
    <FontAwesomeIcon icon={faFilm} size="4x" color="white" />
  </LogoContainer>
);

export default Logo;
