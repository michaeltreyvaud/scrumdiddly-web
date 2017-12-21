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

const Home = () => (
  <div style={Style.container}>
    Welcome to Scrumdiddly
  </div>
);

export default Home;
