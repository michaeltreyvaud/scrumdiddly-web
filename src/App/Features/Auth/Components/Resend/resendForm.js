import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import { withRouter } from 'react-router-dom';
import './resendForm.css';
import Styles from './confirmForm.styles';
import AppTheme from '../../../../../Themes';

class ResendForm extends Component {
  componentWillMount() {
    this.props.resetState();
  }
  componentWillReceiveProps(nextProps) {
    //  Navigate to confirm route on signup success
    if ((nextProps.resendSuccess !== this.props.resendSuccess) &&
      (nextProps.resendSuccess === true && this.props.resendSuccess === false)) {
      this.props.history.push('/auth/confirm');
    }
  }
  componentWillUnmount() {
    this.props.resetState();
  }
  userNameOnChange(text) {
    this.props.setResendUsername(text);
  }
  submitResendForm(event) {
    event.preventDefault();
    if (this.props.userNameValid) {
      this.props.resend(this.props.userName);
    }
  }
  render() {
    return (
      <form
        onSubmit={event => this.submitResendForm(event)}
        style={Styles.form}
      >
        <input
          placeholder="Username"
          type="text"
          style={Styles.userNameInput}
          value={this.props.userName}
          onChange={event => this.userNameOnChange(event.target.value)}
        />
        {this.props.attemptResend ?
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
          value="Resend Code"
          style={this.props.userNameValid
            ? Styles.submitButtonValid
            : Styles.submitButtonInValid}
        />}
        <div style={Styles.errorContainer}>
          {this.props.resendHasErrors && this.props.resendErrorMessage &&
            this.props.resendErrorMessage !== '' && this.props.resendErrorMessage}
        </div>
      </form>
    );
  }
}

ResendForm.propTypes = {
  userName: PropTypes.string.isRequired,
  userNameValid: PropTypes.bool.isRequired,
  attemptResend: PropTypes.bool.isRequired,
  setResendUsername: PropTypes.func.isRequired,
  resendHasErrors: PropTypes.bool.isRequired,
  resendErrorMessage: PropTypes.string.isRequired,
  resend: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  resendSuccess: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(ResendForm);
