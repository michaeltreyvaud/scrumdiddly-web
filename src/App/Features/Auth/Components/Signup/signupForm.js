import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Styles from './signupForm.styles';
import Input from '../../../../Common/Forms/input';
import Submit from '../../../../Common/Forms/submit';
import Loading from '../../../../Common/Forms/loading';
import ErrorContainer from '../../../../Common/Forms/errorContainer';
import NavButton from '../../../../Common/Forms/navButton';

class SignupForm extends Component {
  componentWillMount() {
    this.props.resetState();
  }
  componentWillReceiveProps(nextProps) {
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
  emailOnChange(text) {
    this.props.setEmail(text);
  }
  passwordOnChange(text) {
    this.props.setPassword(text);
  }
  submitSignupForm(event) {
    event.preventDefault();
    if (this.props.userNameValid &&
      this.props.emailValid &&
      this.props.passwordValid) {
      this.props.signup(this.props.userName, this.props.email, this.props.password);
    }
  }
  render() {
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
          placeholder="Email"
          type="text"
          value={this.props.email}
          onChange={event => this.emailOnChange(event.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={this.props.password}
          onChange={event => this.passwordOnChange(event.target.value)}
        />
        {this.props.attempt ? <Loading /> : <Submit
          value="Signup"
          valid={this.props.userNameValid &&
            this.props.emailValid &&
            this.props.passwordValid}
        />}
        <div style={Styles.buttonContainer}>
          <NavButton
            direction
            text="Login"
            onClick={() => { this.props.history.push('/auth/login'); }}
          />
          <NavButton
            text="Confirm Account?"
            onClick={() => { this.props.history.push('/auth/confirm'); }}
          />
        </div>
        <ErrorContainer
          displayErrors={this.props.hasErrors}
          errorMessage={this.props.errorMessage}
        />
      </form>
    );
  }
}

SignupForm.propTypes = {
  userName: PropTypes.string.isRequired,
  userNameValid: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  emailValid: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  passwordValid: PropTypes.bool.isRequired,
  attempt: PropTypes.bool.isRequired,
  hasErrors: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  setUsername: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(SignupForm);
