import React from 'react';
import PropTypes from 'prop-types';
import Styles from './navButton.styles';

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
  direction: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavButton;
