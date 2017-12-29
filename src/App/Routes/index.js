import React from 'react';
import { withRouter } from 'react-router-dom';
import Styles from './index.styles';

const Button = withRouter(({ history, label, path }) => (
  <button
    type="button"
    onClick={() => { history.push(path); }}
    style={(label === 'Login') ? Styles.loginButton : Styles.button}
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
