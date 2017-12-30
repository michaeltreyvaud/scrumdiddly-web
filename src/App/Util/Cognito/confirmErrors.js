const handleCognitoErrors = (res) => {
  //  Only handle backend errors from the cognito wrapper
  if (!res.ok && res.status >= 400 && res.status < 500) {
    return res.json().then((json) => {
      let displayMessage = '';
      switch (json.error) {
        case 'AliasExistsException': {
          displayMessage = 'An account with this username or email has already been confirmed';
          break;
        }
        case 'CodeMismatchException': {
          displayMessage = 'Invalid Code, please check your email and try again';
          break;
        }
        case 'ExpiredCodeException': {
          displayMessage = 'Code has expired';
          break;
        }
        case 'InvalidParameterException': {
          displayMessage = 'Invalid username/code, please try again';
          break;
        }
        case 'LimitExceededException': {
          displayMessage = 'Server is currently busy, please try again later';
          break;
        }
        case 'TooManyFailedAttemptsException': {
          displayMessage = 'Too many failed attempts, please try again later';
          break;
        }
        case 'TooManyRequestsException': {
          displayMessage = 'Too many requests sent, please try again later';
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
