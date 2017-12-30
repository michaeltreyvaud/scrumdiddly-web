import React from 'react';
import PropTypes from 'prop-types';
import AppTheme from '../../../Themes';

const Styles = {
  left: {
    border: 'none',
    backgroundColor: AppTheme.pink,
    height: '25px',
    marginTop: '10px',
    textAlign: 'left',
    padding: '0px',
    color: AppTheme.white,
    outline: 'none',
    cursor: 'pointer',
  },
  right: {
    border: 'none',
    backgroundColor: AppTheme.pink,
    height: '25px',
    marginTop: '10px',
    textAlign: 'right',
    padding: '0px',
    color: AppTheme.white,
    outline: 'none',
    cursor: 'pointer',
  },
};

const NavButton = ({
  direction,
  text,
  onClick,
}) => (
  <button
    type="button"
    onClick={() => onClick()}
    style={(direction) ? Styles.left : Styles.right}
  >
    {text}
  </button>
);

NavButton.propTypes = {
  direction: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

NavButton.defaultProps = {
  direction: false,
};

export default NavButton;
