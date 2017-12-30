import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Styles from './forgotForm.styles';
import Input from '../../../../Common/Forms/input';
import Loading from '../../../../Common/Forms/loading';
import Submit from '../../../../Common/Forms/submit';
import ErrorContainer from '../../../../Common/Forms/errorContainer';
import NavButton from '../../../../Common/Forms/navButton';

class ForgotForm extends Component {
  componentWillMount() {
    this.props.resetState();
  }
  componentWillReceiveProps(nextProps) {
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
        <Input
          placeholder="Username"
          type="text"
          value={this.props.userName}
          onChange={event => this.userNameOnChange(event.target.value)}
        />
        {this.props.attempt ? <Loading /> : <Submit
          value="Reset Password"
          valid={this.props.userNameValid}
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
        <ErrorContainer
          displayErrors={this.props.hasErrors}
          errorMessage={this.props.errorMessage}
        />
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
