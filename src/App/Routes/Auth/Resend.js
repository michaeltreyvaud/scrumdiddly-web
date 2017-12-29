import React from 'react';
import ResendForm from '../../Features/Auth/Components/Resend/resendForm.container';
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
    Resend
    <ResendForm />
  </div>
);

export default Login;
