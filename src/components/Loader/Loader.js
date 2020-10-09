import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import BeatLoader from 'react-spinners/BeatLoader';

const loaderCss = css`
  margin-top: 150px;
`;

const Loader = ({ isLoading }) => (
  <BeatLoader color="white" size={50} loading={isLoading} css={loaderCss} />
);

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;
