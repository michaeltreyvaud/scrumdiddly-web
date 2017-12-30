import React from 'react';
import PropTypes from 'prop-types';
import AppTheme from '../../../Themes';

const Style = {
  width: '100%',
  marginTop: '10px',
  fontSize: AppTheme.smallFont,
};

const Description = ({ description }) => (
  <div style={Style}>
    {description}
  </div>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
