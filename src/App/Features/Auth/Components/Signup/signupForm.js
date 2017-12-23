import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import './signupForm.css';
import Styles from './signupForm.styles';
import AppTheme from '../../../../../Themes';

class SignupForm extends Component {
  emailOnChange(text) {
    this.props.setSignupEmailAddress(text);
  }
  passwordOnChange(text) {
    this.props.setSignupPassword(text);
  }
  submitSignupForm(event) {
    event.preventDefault();
    if (this.props.validEmailAddress && this.props.validPassword) {
      this.props.signup(this.props.emailAddress, this.props.password);
    }
  }
  render() {
    return (
      <form
        onSubmit={event => this.submitSignupForm(event)}
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
        {this.props.signupAttempt ?
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
          value="Signup"
          style={this.props.validEmailAddress && this.props.validPassword
            ? Styles.submitButtonValid
            : Styles.submitButtonInValid}
        />}
        <div style={Styles.errorContainer}>
          {this.props.signupHasErrors && this.props.signupErrorMessage &&
            this.props.signupErrorMessage !== '' && this.props.signupErrorMessage}
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  emailAddress: PropTypes.string.isRequired,
  validEmailAddress: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  validPassword: PropTypes.bool.isRequired,
  setSignupEmailAddress: PropTypes.func.isRequired,
  setSignupPassword: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  signupAttempt: PropTypes.bool.isRequired,
  signupHasErrors: PropTypes.bool.isRequired,
  signupErrorMessage: PropTypes.string.isRequired,
};

export default SignupForm;
