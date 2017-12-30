import React from 'react';
import PropTypes from 'prop-types';
import Styles from './input.styles';

const Input = ({
  placeholder,
  type,
  value,
  onChange,
}) => (
  <input
    placeholder={placeholder}
    type={type}
    style={Styles.input}
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
