import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const LogoContainer = styled.div`
  position: fixed;
  left: 2rem;
  top: 1.5rem;
`;

const Logo = () => (
  <LogoContainer>
    <FontAwesomeIcon icon={faFilm} size="4x" color="white" />
  </LogoContainer>
);

export default Logo;
