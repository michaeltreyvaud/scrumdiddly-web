import React from 'react';
import ConfirmForm from '../../Features/Auth/Components/Confirm/confirmForm.container';
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

const Confirm = () => (
  <div style={Styles.container}>
    Confirm Account
    <ConfirmForm />
  </div>
);

export default Confirm;
