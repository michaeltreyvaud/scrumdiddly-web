import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import {
  setEmailAddress,
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
  },
};

class LoginForm extends Component {
  onChange(text) {
    this.props.setEmailAddress(text);
  }
  submitLoginForm(event) {
    event.preventDefault();
    if (this.props.validEmailAddress) {
      this.props.login();
    }
  }
  render() {
    return (
      <form
        onSubmit={event => this.submitLoginForm(event)}
        style={Styles.form}
      >
        <input
          className="LoginForm-Email-Input"
          placeholder="Email"
          type="text"
          style={Styles.emailInput}
          value={this.props.emailAddress}
          onChange={event => this.onChange(event.target.value)}
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
          style={this.props.validEmailAddress
            ? Styles.submitButtonValid
            : Styles.submitButtonInValid}
        />}
        {this.props.loginHasErrors && this.props.loginErrorMessage &&
          this.props.loginErrorMessage !== '' &&
          <div style={Styles.errorContainer}>
            {this.props.loginErrorMessage}
          </div>}
      </form>
    );
  }
}

LoginForm.propTypes = {
  emailAddress: PropTypes.string.isRequired,
  validEmailAddress: PropTypes.bool.isRequired,
  setEmailAddress: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  loginAttempt: PropTypes.bool.isRequired,
  loginHasErrors: PropTypes.bool.isRequired,
  loginErrorMessage: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  emailAddress: state.auth.loginEmailAddress,
  validEmailAddress: state.auth.loginEmailAddressValid,
  loginAttempt: state.auth.loginAttempt,
  loginHasErrors: state.auth.loginHasErrors,
  loginErrorMessage: state.auth.loginErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  setEmailAddress: text => dispatch(setEmailAddress(text)),
  login: () => dispatch(login()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
