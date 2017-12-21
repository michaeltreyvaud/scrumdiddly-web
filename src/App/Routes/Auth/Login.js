import React, { Component } from 'react';
import AppTheme from '../../../Themes';

const Styles = {
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: AppTheme.pink,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: AppTheme.white,
    fontWeight: 'bold',
    fontSize: AppTheme.largeFont,
    flexDirection: 'column',
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  loginFormEmailInput: {
    color: AppTheme.white,
    backgroundColor: 'transparent',
    border: 'none',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderBottomColor: AppTheme.white,
    fontSize: AppTheme.largeFont,
    outline: 'none',
  },
  loginFormSubmitButton: {
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
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
    };
  }
  submitLoginForm(event) {
    event.preventDefault();
    console.log('Login Submitted');
  }
  render() {
    return (
      <div style={Styles.container}>
        Login
        <form
          onSubmit={event => this.submitLoginForm(event)}
          style={Styles.loginForm}
        >
          <input
            placeholder="Email"
            type="text"
            style={Styles.loginFormEmailInput}
            value={this.state.emailAddress}
          />
          <input
            type="submit"
            value="Submit"
            style={Styles.loginFormSubmitButton}
          />
        </form>
      </div>
    );
  }
}

export default Login;
