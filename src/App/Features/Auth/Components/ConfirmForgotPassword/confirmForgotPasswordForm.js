import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Styles from './confirmForgotPasswordForm.styles';
import Input from '../../../../Common/Forms/input';
import Loading from '../../../../Common/Forms/loading';
import Submit from '../../../../Common/Forms/submit';
import ErrorContainer from '../../../../Common/Forms/errorContainer';
import NavButton from '../../../../Common/Forms/navButton';
import Description from '../../../../Common/Forms/description';

class ConfirmForgotPasswordForm extends Component {
  componentWillMount() {
    this.props.resetState();
  }
  componentWillReceiveProps(nextProps) {
    if ((nextProps.success !== this.props.success) &&
      (nextProps.success === true && this.props.success === false)) {
      this.props.history.push('/auth/login');
    }
  }
  componentWillUnmount() {
    this.props.resetState();
  }
  userNameOnChange(text) {
    this.props.setUserName(text);
  }
  codeOnChange(text) {
    this.props.setCode(text);
  }
  passwordOnChange(text) {
    this.props.setPassword(text);
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
    const description = 'Please enter the above details to create your new password';
    return (
      <form
        onSubmit={event => this.submitSignupForm(event)}
        style={Styles.form}
      >
        <Input
          placeholder="Username"
          type="text"
          value={this.props.userName}
          onChange={event => this.userNameOnChange(event.target.value)}
        />
        <Input
          placeholder="Verification Code"
          type="text"
          value={this.props.code}
          onChange={event => this.codeOnChange(event.target.value)}
        />
        <Input
          placeholder="New Password"
          type="password"
          value={this.props.password}
          onChange={event => this.passwordOnChange(event.target.value)}
        />
        {this.props.attempt ? <Loading /> : <Submit
          value="Reset"
          valid={this.props.userNameValid &&
            this.props.codeValid &&
            this.props.passwordValid}
        />}
        <div style={Styles.buttonContainer}>
          <NavButton
            direction
            text="Login"
            onClick={() => { this.props.history.push('/auth/login'); }}
          />
          <NavButton
            text="Signup"
            onClick={() => { this.props.history.push('/auth/signup'); }}
          />
        </div>
        <Description
          description={description}
        />
        <ErrorContainer
          displayErrors={this.props.hasErrors}
          errorMessage={this.props.errorMessage}
        />
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
  setUserName: PropTypes.func.isRequired,
  setCode: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  confirmForgotPassword: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(ConfirmForgotPasswordForm);
