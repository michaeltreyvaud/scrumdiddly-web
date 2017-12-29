import React from 'react';
import { withRouter } from 'react-router-dom';
import Styles from './index.styles';
import './index.css';

const Button = withRouter(({ history, label, path }) => (
  <button
    type="button"
    onClick={() => { history.push(path); }}
    className={(label === 'Login') ? 'login-button' : 'button'}
  >
    {label}
  </button>
));

const Home = () => (
  <div style={Styles.container}>
    <div style={Styles.content}>
      Welcome to Scrumdiddly
      <div className="home-button-container" >
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
