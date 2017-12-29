import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import { withRouter } from 'react-router-dom';
import './forgotForm.css';
import Styles from './forgotForm.styles';
import AppTheme from '../../../../../Themes';

class ForgotForm extends Component {
  componentWillMount() {
    this.props.resetForgotState();
  }
  componentWillReceiveProps(nextProps) {
    //  Navigate to password reset if send password is successful
    if ((nextProps.forgotSuccess !== this.props.forgotSuccess) &&
      (nextProps.forgotSuccess === true && this.props.forgotSuccess === false)) {
      this.props.history.push('/auth/confirmForgotPassword');
    }
  }
  componentWillUnmount() {
    this.props.resetForgotState();
  }
  userNameOnChange(text) {
    this.props.setForgotUsername(text);
  }
  submitForgotForm(event) {
    event.preventDefault();
    if (this.props.forgotUserNameValid) {
      this.props.forgot(this.props.forgotUserName);
    }
  }
  render() {
    return (
      <form
        onSubmit={event => this.submitForgotForm(event)}
        style={Styles.form}
      >
        <input
          placeholder="Username"
          type="text"
          style={Styles.userNameInput}
          value={this.props.forgotUserName}
          onChange={event => this.userNameOnChange(event.target.value)}
        />
        {this.props.forgotAttempt ?
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
          value="Reset Password"
          style={this.props.forgotUserName
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
          {this.props.forgotHasErrors && this.props.forgotErrorMessage &&
            this.props.forgotErrorMessage !== '' && this.props.forgotErrorMessage}
        </div>
      </form>
    );
  }
}

ForgotForm.propTypes = {
  forgotUserName: PropTypes.string.isRequired,
  forgotUserNameValid: PropTypes.bool.isRequired,
  forgotAttempt: PropTypes.bool.isRequired,
  forgotHasErrors: PropTypes.bool.isRequired,
  forgotErrorMessage: PropTypes.string.isRequired,
  forgotSuccess: PropTypes.bool.isRequired,
  setForgotUsername: PropTypes.func.isRequired,
  forgot: PropTypes.func.isRequired,
  resetForgotState: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(ForgotForm);
