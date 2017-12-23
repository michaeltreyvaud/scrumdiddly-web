import React from 'react';
import AppTheme from '../../../Themes';
import SignupForm from '../../Features/Auth/Components/Signup/signupForm.container';

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

const Signup = () => (
  <div style={Styles.container}>
    Signup
    <SignupForm />
  </div>
);

export default Signup;
