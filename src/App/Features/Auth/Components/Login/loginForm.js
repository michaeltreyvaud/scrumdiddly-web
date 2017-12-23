import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import {
  setEmailAddress,
  setPassword,
  login,
} from '../../Store/actions';
import AppTheme from '../../../../../Themes';
import './loginForm.css';

const Styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    maxWidth: '450px',
    minWidth: '300px',
    alignItems: 'center',
  },
  emailInput: {
    width: '100%',
    color: AppTheme.white,
    backgroundColor: 'transparent',
    border: 'none',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderBottomColor: AppTheme.white,
    fontSize: AppTheme.largeFont,
    outline: 'none',
    marginTop: '30px',
  },
  passwordInput: {
    width: '100%',
    color: AppTheme.white,
    backgroundColor: 'transparent',
    border: 'none',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderBottomColor: AppTheme.white,
    fontSize: AppTheme.largeFont,
    outline: 'none',
    marginTop: '30px',
  },
  submitButtonValid: {
    width: '100%',
    height: '40px',
    backgroundColor: AppTheme.white,
    color: AppTheme.blue,
    border: 'none',
    borderRadius: '5px',
    marginTop: '10px',
    fontSize: AppTheme.mediumFont,
    textTransform: 'uppercase',
    outline: 'none',
  },
  submitButtonInValid: {
    width: '100%',
    height: '40px',
    backgroundColor: AppTheme.blue,
    color: AppTheme.white,
    border: 'none',
    borderRadius: '5px',
    marginTop: '10px',
    fontSize: AppTheme.mediumFont,
    textTransform: 'uppercase',
    outline: 'none',
  },
  loadingContainer: {
    backgroundColor: AppTheme.white,
    height: '40px',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    border: 'none',
    borderRadius: '5px',
    marginTop: '10px',
  },
  errorContainer: {
    width: '100%',
    fontSize: AppTheme.mediumFont,
    marginTop: '10px',
    height: '40px',
  },
};

class LoginForm extends Component {
  emailOnChange(text) {
    this.props.setEmailAddress(text);
  }
  passwordOnChange(text) {
    this.props.setPassword(text);
  }
  submitLoginForm(event) {
    event.preventDefault();
    if (this.props.validEmailAddress && this.props.validPassword) {
      this.props.login(this.props.emailAddress, this.props.password);
    }
  }
  render() {
    return (
      <form
        onSubmit={event => this.submitLoginForm(event)}
        style={Styles.form}
      >
        <input
          placeholder="Email"
          type="text"
          style={Styles.emailInput}
          value={this.props.emailAddress}
          onChange={event => this.emailOnChange(event.target.value)}
        />
        <input
          placeholder="Password"
          type="text"
          style={Styles.passwordInput}
          value={this.props.password}
          onChange={event => this.passwordOnChange(event.target.value)}
        />
        {this.props.loginAttempt ?
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
          value="Login"
          style={this.props.validEmailAddress && this.props.validPassword
            ? Styles.submitButtonValid
            : Styles.submitButtonInValid}
        />}
        <div style={Styles.errorContainer}>
          {this.props.loginHasErrors && this.props.loginErrorMessage &&
            this.props.loginErrorMessage !== '' && this.props.loginErrorMessage}
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  emailAddress: PropTypes.string.isRequired,
  validEmailAddress: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  validPassword: PropTypes.bool.isRequired,
  setEmailAddress: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  loginAttempt: PropTypes.bool.isRequired,
  loginHasErrors: PropTypes.bool.isRequired,
  loginErrorMessage: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  emailAddress: state.auth.loginEmailAddress,
  validEmailAddress: state.auth.loginEmailAddressValid,
  password: state.auth.loginPassword,
  validPassword: state.auth.loginPasswordValid,
  loginAttempt: state.auth.loginAttempt,
  loginHasErrors: state.auth.loginHasErrors,
  loginErrorMessage: state.auth.loginErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  setEmailAddress: text => dispatch(setEmailAddress(text)),
  setPassword: text => dispatch(setPassword(text)),
  login: (emailAddress, password) => dispatch(login(emailAddress, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
