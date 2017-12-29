import React from 'react';
import ForgotForm from '../../Features/Auth/Components/Forgot/forgotForm.container';
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

const Forgot = () => (
  <div style={Styles.container}>
    Forgotten Password
    <ForgotForm />
  </div>
);

export default Forgot;
