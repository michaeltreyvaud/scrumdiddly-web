const handleCognitoErrors = (res) => {
  //  Only handle backend errors from the cognito wrapper
  if (!res.ok && res.status >= 400 && res.status < 500) {
    return res.json().then((json) => {
      let displayMessage = '';
      switch (json.error) {
        //  Common errors
        case 'AccessDeniedException': {
          displayMessage = 'Permission denied';
          break;
        }
        case 'IncompleteSignature': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'InternalFailure': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'InvalidAction': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'InvalidClientTokenId': {
          displayMessage = 'Permission denied';
          break;
        }
        case 'InvalidParameterCombination': {
          displayMessage = 'Invalid details provided, please try again';
          break;
        }
        case 'InvalidParameterValue': {
          displayMessage = 'Invalid details provided, please try again';
          break;
        }
        case 'InvalidQueryParameter': {
          displayMessage = 'Invalid details provided, please try again';
          break;
        }
        case 'MalformedQueryString': {
          displayMessage = 'Invalid details provided, please try again';
          break;
        }
        case 'MissingAction': {
          displayMessage = 'Invalid details provided, please try again';
          break;
        }
        case 'MissingAuthenticationToken': {
          displayMessage = 'Permission denied';
          break;
        }
        case 'MissingParameter': {
          displayMessage = 'Invalid details provided, please try again';
          break;
        }
        case 'OptInRequired': {
          displayMessage = 'Permission denied';
          break;
        }
        case 'RequestExpired': {
          displayMessage = 'Request has expired, please try again';
          break;
        }
        case 'ThrottlingException': {
          displayMessage = 'Server is busy, please try again later';
          break;
        }
        case 'ValidationError': {
          displayMessage = 'Invalid details provided, please try again';
          break;
        }
        //  Signup
        case 'CodeDeliveryFailureException': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'InternalErrorException': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'InvalidEmailRoleAccessPolicyException': {
          displayMessage = 'Please enter a valid email';
          break;
        }
        case 'InvalidLambdaResponseException': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'InvalidParameterException': {
          displayMessage = 'Invalid username/password, please try again';
          break;
        }
        case 'InvalidPasswordException': {
          displayMessage = 'Invalid password, please try again';
          break;
        }
        case 'InvalidSmsRoleAccessPolicyException': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'InvalidSmsRoleTrustRelationshipException': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'NotAuthorizedException': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'ResourceNotFoundException': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'TooManyRequestsException': {
          displayMessage = 'Server is busy, please try again later';
          break;
        }
        case 'UnexpectedLambdaException': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'UserLambdaValidationException': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'UsernameExistsException': {
          displayMessage = 'Username already exists, please try another';
          break;
        }
        //  Confirm Account
        case 'AliasExistsException': {
          displayMessage = 'An account with this email has already been confirmed';
          break;
        }
        case 'CodeMismatchException': {
          displayMessage = 'Invalid Code, please check your email and try again';
          break;
        }
        case 'LimitExceededException': {
          displayMessage = 'Server is busy, please try again later';
          break;
        }
        case 'TooManyFailedAttemptsException': {
          displayMessage = 'Multiple failed attempts detected, please try again later';
          break;
        }
        case 'UserNotFoundException': {
          displayMessage = 'Account was not found';
          break;
        }
        //  Login
        case 'InvalidUserPoolConfigurationException': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'MFAMethodNotFoundException': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'PasswordResetRequiredException': {
          displayMessage = 'Password reset is required for this account, please reset your password before attempting to login';
          break;
        }
        case 'UserNotConfirmedException': {
          displayMessage = 'This account is not active, please confirm your account before attempting to login';
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
