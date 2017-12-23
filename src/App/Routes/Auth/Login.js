import React from 'react';
import LoginForm from '../../Features/Auth/Components/Login/loginForm.container';
import AppTheme from '../../../Themes';

const Styles = {
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
    flexDirection: 'column',
  },
};

const Login = () => (
  <div style={Styles.container}>
    Login
    <LoginForm />
  </div>
);

export default Login;
