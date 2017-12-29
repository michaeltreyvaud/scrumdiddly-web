import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import { withRouter } from 'react-router-dom';
import Styles from './confirmForm.styles';
import AppTheme from '../../../../../Themes';

class ConfirmForm extends Component {
  componentWillMount() {
    this.props.resetState();
  }
  componentWillReceiveProps(nextProps) {
    //  Navigate to login on confirm success
    if ((nextProps.success !== this.props.success) &&
      (nextProps.success === true && this.props.success === false)) {
      this.props.history.push('/auth/login');
    }
  }
  componentWillUnmount() {
    this.props.resetState();
  }
  userNameOnChange(text) {
    this.props.setUsername(text);
  }
  confirmationCodeOnChange(text) {
    this.props.setCode(text);
  }
  submitConfirmForm(event) {
    event.preventDefault();
    if (this.props.userNameValid && this.props.codeValid) {
      this.props.confirmAccount(this.props.userName, this.props.code);
    }
  }
  render() {
    return (
      <form
        onSubmit={event => this.submitConfirmForm(event)}
        style={Styles.form}
      >
        <input
          placeholder="Username"
          type="text"
          style={Styles.userNameInput}
          value={this.props.userName}
          onChange={event => this.userNameOnChange(event.target.value)}
        />
        <input
          placeholder="Verification Code"
          type="text"
          style={Styles.confirmationCodeInput}
          value={this.props.code}
          onChange={event => this.confirmationCodeOnChange(event.target.value)}
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
          value="Confim Account"
          style={this.props.userNameValid && this.props.codeValid
            ? Styles.submitButtonValid
            : Styles.submitButtonInValid}
        />}
        <div style={Styles.buttonContainer}>
          <button
            type="button"
            onClick={() => { this.props.history.push('/auth/resend'); }}
            style={Styles.resendButton}
          >
            Resend code?
          </button>
        </div>
        <div style={Styles.description}>
          Please enter the verification code that was sent to your supplied email address
        </div>
        <div style={Styles.errorContainer}>
          {this.props.hasErrors && this.props.errorMessage &&
            this.props.errorMessage !== '' && this.props.errorMessage}
        </div>
      </form>
    );
  }
}

ConfirmForm.propTypes = {
  userName: PropTypes.string.isRequired,
  userNameValid: PropTypes.bool.isRequired,
  code: PropTypes.string.isRequired,
  codeValid: PropTypes.bool.isRequired,
  attempt: PropTypes.bool.isRequired,
  hasErrors: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  setUsername: PropTypes.func.isRequired,
  setCode: PropTypes.func.isRequired,
  confirmAccount: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(ConfirmForm);
