import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import { withRouter } from 'react-router-dom';
import AppTheme from '../../../../../Themes';
import './loginForm.css';
import Styles from './loginForm.styles';

const RouteButton = withRouter(({ history, label, path }) => (
  <button
    type="button"
    onClick={() => { history.push(path); }}
    style={(label === 'Signup') ? Styles.signupButton : Styles.forgotButton}
  >
    {label}
  </button>
));

class LoginForm extends Component {
  componentWillMount() {
    this.props.resetLoginState();
  }
  componentWillUnmount() {
    this.props.resetLoginState();
  }
  userNameOnChange(text) {
    this.props.setLoginUsername(text);
  }
  passwordOnChange(text) {
    this.props.setLoginPassword(text);
  }
  submitLoginForm(event) {
    event.preventDefault();
    if (this.props.validUsername && this.props.validPassword) {
      this.props.login(this.props.userName, this.props.password);
    }
  }
  render() {
    return (
      <form
        onSubmit={event => this.submitLoginForm(event)}
        style={Styles.form}
      >
        <input
          placeholder="Username or Email"
          type="text"
          style={Styles.emailInput}
          value={this.props.userName}
          onChange={event => this.userNameOnChange(event.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          style={Styles.passwordInput}
          value={this.props.password}
          onChange={event => this.passwordOnChange(event.target.value)}
        />
        {this.props.loginAttempt ?
          <div style={Styles.loadingContainer}>
            <ReactLoading
              type="spin"
              color={AppTheme.blue}
              delay={0}
              height="30px"
              width="30px"
            />
          </div>
        : <input
          type="submit"
          value="Login"
          style={this.props.validUsername && this.props.validPassword
            ? Styles.submitButtonValid
            : Styles.submitButtonInValid}
        />}
        <div style={Styles.buttonContainer}>
          <RouteButton
            label="Signup"
            path="/auth/signup"
          />
          <RouteButton
            label="Forgot your password?"
            path="/auth/forgot"
          />
        </div>
        <div style={Styles.errorContainer}>
          {this.props.loginHasErrors && this.props.loginErrorMessage &&
            this.props.loginErrorMessage !== '' && this.props.loginErrorMessage}
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  userName: PropTypes.string.isRequired,
  validUsername: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  validPassword: PropTypes.bool.isRequired,
  setLoginUsername: PropTypes.func.isRequired,
  setLoginPassword: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  loginAttempt: PropTypes.bool.isRequired,
  loginHasErrors: PropTypes.bool.isRequired,
  loginErrorMessage: PropTypes.string.isRequired,
  resetLoginState: PropTypes.func.isRequired,
};

export default LoginForm;
