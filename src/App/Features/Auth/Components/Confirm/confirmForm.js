import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Styles from './confirmForm.styles';
import Input from '../../../../Common/Forms/input';
import Submit from '../../../../Common/Forms/submit';
import Loading from '../../../../Common/Forms/loading';
import ErrorContainer from '../../../../Common/Forms/errorContainer';
import Description from '../../../../Common/Forms/description';
import NavButton from '../../../../Common/Forms/navButton';

class ConfirmForm extends Component {
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
    const description = 'Please enter the verification code that was sent to your supplied email address';
    return (
      <form
        onSubmit={event => this.submitConfirmForm(event)}
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
          onChange={event => this.confirmationCodeOnChange(event.target.value)}
        />
        {this.props.attempt ? <Loading /> : <Submit
          value="Confim Account"
          valid={this.props.userNameValid && this.props.codeValid}
        />}
        <div style={Styles.buttonContainer}>
          <NavButton
            text="Resend code?"
            onClick={() => { this.props.history.push('/auth/resend'); }}
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
