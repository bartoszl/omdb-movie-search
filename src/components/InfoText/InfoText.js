import React from 'react';
import PropTypes from 'prop-types';
import InfoLabel from '../InfoLabel';

const InfoText = ({ label, children }) => (
  <p>
    <InfoLabel>
      { label }
    </InfoLabel>
    { children }
  </p>
);

InfoText.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default InfoText;
