import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import { withRouter } from 'react-router-dom';
import Styles from './forgotForm.styles';
import AppTheme from '../../../../../Themes';

class ForgotForm extends Component {
  componentWillMount() {
    this.props.resetState();
  }
  componentWillReceiveProps(nextProps) {
    //  Navigate to password reset if send password is successful
    if ((nextProps.success !== this.props.success) &&
      (nextProps.success === true && this.props.success === false)) {
      this.props.history.push('/auth/confirmForgotPassword');
    }
  }
  componentWillUnmount() {
    this.props.resetState();
  }
  userNameOnChange(text) {
    this.props.setUsername(text);
  }
  submitForgotForm(event) {
    event.preventDefault();
    if (this.props.userNameValid) {
      this.props.forgot(this.props.userName);
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
          value="Reset Password"
          style={this.props.userName
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
          {this.props.hasErrors && this.props.hasErrors &&
            this.props.errorMessage !== '' && this.props.errorMessage}
        </div>
      </form>
    );
  }
}

ForgotForm.propTypes = {
  userName: PropTypes.string.isRequired,
  userNameValid: PropTypes.bool.isRequired,
  attempt: PropTypes.bool.isRequired,
  hasErrors: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  setUsername: PropTypes.func.isRequired,
  forgot: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(ForgotForm);
