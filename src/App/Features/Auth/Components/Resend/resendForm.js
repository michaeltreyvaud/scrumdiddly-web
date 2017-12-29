import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import { withRouter } from 'react-router-dom';
import Styles from './confirmForm.styles';
import AppTheme from '../../../../../Themes';

class ResendForm extends Component {
  componentWillMount() {
    this.props.resetState();
  }
  componentWillReceiveProps(nextProps) {
    //  Navigate to confirm route on signup success
    if ((nextProps.success !== this.props.success) &&
      (nextProps.success === true && this.props.success === false)) {
      this.props.history.push('/auth/confirm');
    }
  }
  componentWillUnmount() {
    this.props.resetState();
  }
  userNameOnChange(text) {
    this.props.setUsername(text);
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
          value="Resend Code"
          style={this.props.userNameValid
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

ResendForm.propTypes = {
  userName: PropTypes.string.isRequired,
  userNameValid: PropTypes.bool.isRequired,
  attempt: PropTypes.bool.isRequired,
  hasErrors: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  setUsername: PropTypes.func.isRequired,
  resend: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(ResendForm);
