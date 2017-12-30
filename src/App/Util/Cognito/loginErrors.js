const handleCognitoErrors = (res) => {
  //  Only handle backend errors from the cognito wrapper
  if (!res.ok && res.status >= 400 && res.status < 500) {
    return res.json().then((json) => {
      let displayMessage = '';
      switch (json.error) {
        case 'InvalidParameterException': {
          displayMessage = 'Invalid username/email or password, please try again';
          break;
        }
        case 'NotAuthorizedException': {
          displayMessage = 'Forbidden, please try again';
          break;
        }
        case 'PasswordResetRequiredException': {
          displayMessage = 'Account requires a password reset, please reset your password before attempting to login';
          break;
        }
        case 'TooManyRequestsException': {
          displayMessage = 'Too many requests, please try again later';
          break;
        }
        case 'UserNotConfirmedException': {
          displayMessage = 'Account has not been confirmed yet';
          break;
        }
        case 'UserNotFoundException': {
          displayMessage = 'Account not found';
          break;
        }
        default: {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
      }
      const error = new Error(displayMessage);
      error.code = res.status;
      throw error;
    });
  }
  return res;
};

export default handleCognitoErrors;
