import React from 'react';
import PropTypes from 'prop-types';
import AppTheme from '../../../Themes';

const Style = {
  width: '100%',
  color: AppTheme.white,
  backgroundColor: 'transparent',
  border: 'none',
  borderBottomStyle: 'solid',
  borderBottomWidth: '1px',
  borderBottomColor: AppTheme.white,
  fontSize: AppTheme.largeFont,
  outline: 'none',
  marginTop: '30px',
};

const Input = ({
  placeholder,
  type,
  value,
  onChange,
}) => (
  <input
    placeholder={placeholder}
    type={type}
    style={Style}
    value={value}
    onChange={event => onChange(event)}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
