import React from 'react';
import PropTypes from 'prop-types';
import AppTheme from '../../../Themes';

const Style = {
  width: '100%',
  fontSize: AppTheme.smallFont,
  marginTop: '10px',
  height: '40px',
};

const ErrorContainer = ({ displayErrors, errorMessage }) => (
  <div style={Style}>
    {displayErrors && errorMessage &&
      errorMessage !== '' && errorMessage}
  </div>
);

ErrorContainer.propTypes = {
  displayErrors: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default ErrorContainer;
