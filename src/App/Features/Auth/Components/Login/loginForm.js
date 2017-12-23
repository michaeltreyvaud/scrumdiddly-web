import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import AppTheme from '../../../../../Themes';
import './loginForm.css';
import Styles from './loginForm.styles';

class LoginForm extends Component {
  emailOnChange(text) {
    this.props.setLoginEmailAddress(text);
  }
  passwordOnChange(text) {
    this.props.setLoginPassword(text);
  }
  submitLoginForm(event) {
    event.preventDefault();
    if (this.props.validEmailAddress && this.props.validPassword) {
      this.props.login(this.props.emailAddress, this.props.password);
    }
  }
  render() {
    return (
      <form
        onSubmit={event => this.submitLoginForm(event)}
        style={Styles.form}
      >
        <input
          placeholder="Email"
          type="text"
          style={Styles.emailInput}
          value={this.props.emailAddress}
          onChange={event => this.emailOnChange(event.target.value)}
        />
        <input
          placeholder="Password"
          type="text"
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
          style={this.props.validEmailAddress && this.props.validPassword
            ? Styles.submitButtonValid
            : Styles.submitButtonInValid}
        />}
        <div style={Styles.errorContainer}>
          {this.props.loginHasErrors && this.props.loginErrorMessage &&
            this.props.loginErrorMessage !== '' && this.props.loginErrorMessage}
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  emailAddress: PropTypes.string.isRequired,
  validEmailAddress: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  validPassword: PropTypes.bool.isRequired,
  setLoginEmailAddress: PropTypes.func.isRequired,
  setLoginPassword: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  loginAttempt: PropTypes.bool.isRequired,
  loginHasErrors: PropTypes.bool.isRequired,
  loginErrorMessage: PropTypes.string.isRequired,
};

export default LoginForm;
