import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import { withRouter } from 'react-router-dom';
import './confirmForm.css';
import Styles from './confirmForm.styles';
import AppTheme from '../../../../../Themes';

class ConfirmForm extends Component {
  componentWillMount() {
    this.props.resetState();
  }
  componentWillUnmount() {
    this.props.resetState();
  }
  userNameOnChange(text) {
    this.props.setConfirmUsername(text);
  }
  confirmationCodeOnChange(text) {
    this.props.setConfirmCode(text);
  }
  submitConfirmForm(event) {
    event.preventDefault();
    if (this.props.validUsername && this.props.validConfirmationCode) {
      this.props.confirmAccount(this.props.userName, this.props.confirmationCode);
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
          value={this.props.confirmationCode}
          onChange={event => this.confirmationCodeOnChange(event.target.value)}
        />
        {this.props.confirmAttempt ?
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
          value="Confim Account"
          style={this.props.validUsername && this.props.validConfirmationCode
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
          {this.props.confirmHasErrors && this.props.confirmErrorMessage &&
            this.props.confirmErrorMessage !== '' && this.props.confirmErrorMessage}
        </div>
      </form>
    );
  }
}

ConfirmForm.propTypes = {
  userName: PropTypes.string.isRequired,
  validUsername: PropTypes.bool.isRequired,
  confirmationCode: PropTypes.string.isRequired,
  validConfirmationCode: PropTypes.bool.isRequired,
  confirmAttempt: PropTypes.bool.isRequired,
  confirmHasErrors: PropTypes.bool.isRequired,
  confirmErrorMessage: PropTypes.string.isRequired,
  setConfirmUsername: PropTypes.func.isRequired,
  setConfirmCode: PropTypes.func.isRequired,
  confirmAccount: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(ConfirmForm);
