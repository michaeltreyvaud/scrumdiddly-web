import React from 'react';
import { withRouter } from 'react-router-dom';
import AppTheme from '../../Themes';

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
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    maxWidth: '450px',
    minWidth: '300px',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '40px',
    backgroundColor: AppTheme.white,
    color: AppTheme.blue,
    fontSize: AppTheme.mediumFont,
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    margin: '10px',
  },
};

const Button = withRouter(({ history, label, path }) => (
  <button
    type="button"
    onClick={() => { history.push(path); }}
    style={Styles.button}
  >
    {label}
  </button>
));

const Home = () => (
  <div style={Styles.container}>
    <div style={Styles.content}>
      Welcome to Scrumdiddly
      <div style={Styles.buttonContainer}>
        <Button
          label="Login"
          path="/auth/login"
        />
        <Button
          label="Signup"
          path="/auth/signup"
        />
      </div>
    </div>
  </div>
);

export default Home;
