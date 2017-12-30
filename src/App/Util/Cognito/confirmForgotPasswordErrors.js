const handleCognitoErrors = (res) => {
  //  Only handle backend errors from the cognito wrapper
  if (!res.ok && res.status >= 400 && res.status < 500) {
    return res.json().then((json) => {
      let displayMessage = '';
      switch (json.error) {
        case 'CodeMismatchException': {
          displayMessage = 'Invalid code, please try again';
          break;
        }
        case 'ExpiredCodeException': {
          displayMessage = 'Code has expired, please try again';
          break;
        }
        case 'InvalidParameterException': {
          displayMessage = 'Invalid Username/Code or Password, please try again';
          break;
        }
        case 'InvalidPasswordException': {
          displayMessage = 'Invalid password, please try again';
          break;
        }
        case 'LimitExceededException': {
          displayMessage = 'Server is currently busy, please try again later';
          break;
        }
        case 'NotAuthorizedException': {
          displayMessage = 'Forbidden, please try again';
          break;
        }
        case 'TooManyFailedAttemptsException': {
          displayMessage = 'Too many failed attempts, please try again later';
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
