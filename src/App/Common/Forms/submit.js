import React from 'react';
import PropTypes from 'prop-types';
import AppTheme from '../../../Themes';

const Styles = {
  valid: {
    width: '100%',
    height: '40px',
    backgroundColor: AppTheme.white,
    color: AppTheme.pink,
    border: 'none',
    borderRadius: '5px',
    borderWidth: '0px',
    marginTop: '10px',
    fontSize: AppTheme.mediumFont,
    textTransform: 'uppercase',
    outline: 'none',
    cursor: 'pointer',
  },
  inValid: {
    width: '100%',
    height: '40px',
    backgroundColor: AppTheme.pink,
    color: AppTheme.white,
    border: 'none',
    borderRadius: '5px',
    marginTop: '10px',
    fontSize: AppTheme.mediumFont,
    textTransform: 'uppercase',
    outline: 'none',
    borderWidth: '1px',
    borderColor: AppTheme.white,
    borderStyle: 'solid',
    cursor: 'pointer',
  },
};

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
