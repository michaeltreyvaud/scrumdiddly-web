import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import { withRouter } from 'react-router-dom';
import Styles from './confirmForgotPasswordForm.styles';
import AppTheme from '../../../../../Themes';

class ConfirmForgotPasswordForm extends Component {
  componentWillMount() {
    this.props.resetConfirmForgotPasswordState();
  }
  componentWillReceiveProps(nextProps) {
    if ((nextProps.success !== this.props.success) &&
      (nextProps.success === true && this.props.success === false)) {
      this.props.history.push('/auth/login');
    }
  }
  componentWillUnmount() {
    this.props.resetConfirmForgotPasswordState();
  }
  userNameOnChange(text) {
    this.props.setConfirmForgotPasswordUserName(text);
  }
  codeOnChange(text) {
    this.props.setConfirmForgotPasswordCode(text);
  }
  passwordOnChange(text) {
    this.props.setConfirmForgotPasswordPassword(text);
  }
  submitSignupForm(event) {
    event.preventDefault();
    if (this.props.userNameValid &&
      this.props.codeValid &&
      this.props.passwordValid) {
      this.props.confirmForgotPassword(this.props.userName, this.props.code, this.props.password);
    }
  }
  render() {
    return (
      <form
        onSubmit={event => this.submitSignupForm(event)}
        style={Styles.form}
      >
        <input
          placeholder="Username"
          type="text"
          style={Styles.inputField}
          value={this.props.userName}
          onChange={event => this.userNameOnChange(event.target.value)}
        />
        <input
          placeholder="Verification Code"
          type="text"
          style={Styles.inputField}
          value={this.props.code}
          onChange={event => this.codeOnChange(event.target.value)}
        />
        <input
          placeholder="New Password"
          type="password"
          style={Styles.inputField}
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
          value="Reset"
          style={this.props.userNameValid &&
            this.props.codeValid &&
            this.props.passwordValid
            ? Styles.submitButtonValid
            : Styles.submitButtonInValid}
        />}
        <div style={Styles.buttonContainer}>
          <button
            type="button"
            onClick={() => { this.props.history.push('/auth/login'); }}
            style={Styles.loginButton}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => { this.props.history.push('/auth/signup'); }}
            style={Styles.signupButton}
          >
            Signup
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

ConfirmForgotPasswordForm.propTypes = {
  userName: PropTypes.string.isRequired,
  userNameValid: PropTypes.bool.isRequired,
  code: PropTypes.string.isRequired,
  codeValid: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  passwordValid: PropTypes.bool.isRequired,
  attempt: PropTypes.bool.isRequired,
  hasErrors: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  setConfirmForgotPasswordUserName: PropTypes.func.isRequired,
  setConfirmForgotPasswordCode: PropTypes.func.isRequired,
  setConfirmForgotPasswordPassword: PropTypes.func.isRequired,
  confirmForgotPassword: PropTypes.func.isRequired,
  resetConfirmForgotPasswordState: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(ConfirmForgotPasswordForm);
