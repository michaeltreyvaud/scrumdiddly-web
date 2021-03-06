import React from 'react';
import AppTheme from '../../Themes';

const Style = {
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: AppTheme.pink,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: AppTheme.white,
    fontWeight: 'bold',
    fontSize: AppTheme.largeFont,
  },
};

const NoMatch = () => (
  <div style={Style.container}>
    Not Found
  </div>
);

export default NoMatch;
