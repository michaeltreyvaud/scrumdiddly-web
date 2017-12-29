import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import { withRouter } from 'react-router-dom';
import AppTheme from '../../../../../Themes';
import Styles from './loginForm.styles';

class LoginForm extends Component {
  componentWillMount() {
    this.props.resetState();
  }
  componentWillUnmount() {
    this.props.resetState();
  }
  userNameOnChange(text) {
    this.props.setUsername(text);
  }
  passwordOnChange(text) {
    this.props.setPassword(text);
  }
  submitLoginForm(event) {
    event.preventDefault();
    if (this.props.userNameValid && this.props.passwordValid) {
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
        {this.props.attempt ?
          <div style={Styles.loadingContainer}>
            <ReactLoading
              type="spin"
              color={AppTheme.pink}
              delay={0}
              height="30px"
              width="30px"
            />
          </div>
        : <input
          type="submit"
          value="Login"
          style={this.props.userNameValid && this.props.passwordValid
            ? Styles.submitButtonValid
            : Styles.submitButtonInValid}
        />}
        <div style={Styles.buttonContainer}>
          <button
            type="button"
            onClick={() => { this.props.history.push('/auth/signup'); }}
            style={Styles.signupButton}
          >
            Signup
          </button>
          <button
            type="button"
            onClick={() => { this.props.history.push('/auth/forgot'); }}
            style={Styles.forgotButton}
          >
            Forgot your password?
          </button>
        </div>
        <div style={Styles.errorContainer}>
          {this.props.hasErrors && this.props.errorMessage &&
            this.props.errorMessage !== '' && this.props.errorMessage}
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  userName: PropTypes.string.isRequired,
  userNameValid: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  passwordValid: PropTypes.bool.isRequired,
  attempt: PropTypes.bool.isRequired,
  hasErrors: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(LoginForm);
