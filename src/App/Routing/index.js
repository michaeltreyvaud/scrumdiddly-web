import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Routes/Auth/Login';
import Home from '../Routes';
import Signup from '../Routes/Auth/Signup';
import Confirm from '../Routes/Auth/Confirm';
import Resend from '../Routes/Auth/Resend';
import Forgot from '../Routes/Auth/Forgot';
import NoMatch from '../Routes/NoMatch';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/auth/login" component={Login} />
    <Route exact path="/auth/signup" component={Signup} />
    <Route exact path="/auth/confirm" component={Confirm} />
    <Route exact path="/auth/resend" component={Resend} />
    <Route exact path="/auth/forgot" component={Forgot} />
    <Route component={NoMatch} />
  </Switch>
);

export default AppRouter;
