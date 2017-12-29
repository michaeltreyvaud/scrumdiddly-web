import React from 'react';
import ConfirmForgotResetForm from '../../Features/Auth/Components/ConfirmForgotPassword/confirmForgotPasswordForm.container';
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

const ConfirmForgotPassword = () => (
  <div style={Styles.container}>
    Reset Password
    <ConfirmForgotResetForm />
  </div>
);

export default ConfirmForgotPassword;
