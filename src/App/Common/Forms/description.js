import React from 'react';
import PropTypes from 'prop-types';
import Styles from './description.styles';

const Description = ({ description }) => (
  <div style={Styles.description}>
    {description}
  </div>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
