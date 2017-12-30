import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Styles from './loginForm.styles';
import Input from '../../../../Common/Forms/input';
import Submit from '../../../../Common/Forms/submit';
import Loading from '../../../../Common/Forms/loading';
import ErrorContainer from '../../../../Common/Forms/errorContainer';
import NavButton from '../../../../Common/Forms/navButton';

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
        <Input
          placeholder="Username or Email"
          type="text"
          value={this.props.userName}
          onChange={event => this.userNameOnChange(event.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={this.props.password}
          onChange={event => this.passwordOnChange(event.target.value)}
        />
        {this.props.attempt ? <Loading /> : <Submit
          value="Login"
          valid={this.props.userNameValid && this.props.passwordValid}
        />}
        <div style={Styles.buttonContainer}>
          <NavButton
            direction
            text="Signup"
            onClick={() => { this.props.history.push('/auth/signup'); }}
          />
          <NavButton
            text="Forgot your password?"
            onClick={() => { this.props.history.push('/auth/forgot'); }}
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
