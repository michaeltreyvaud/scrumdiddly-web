import React from 'react';
import PropTypes from 'prop-types';
import Styles from './submit.styles';

const Submit = ({ value, valid }) => (
  <input
    type="submit"
    style={(valid) ? Styles.valid : Styles.inValid}
    value={value}
  />
);

Submit.propTypes = {
  value: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
};

export default Submit;
