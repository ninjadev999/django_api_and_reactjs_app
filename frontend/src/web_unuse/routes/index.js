import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Templates
import TemplateNothing from '../components/TemplateNothing';
import TemplateSidebar from '../components/TemplateSidebar';
import TemplateTopbar from '../components/TemplateTopbar';

// Routes
import HomeScreen from '../containers/HomeScreen';
import SignUpScreen from '../containers/SignUpScreen';

import LoginScreen from '../containers/LoginScreen';
import ForgotPasswordScreen from '../containers/ForgotPasswordScreen';

import Error from '../components/Error';

const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (
        <TemplateTopbar>
          <HomeScreen {...props} />
        </TemplateTopbar>
      )}
    />
    <Route
      path="/sign-up"
      render={props => (
        <TemplateNothing>
          <SignUpScreen {...props} />
        </TemplateNothing>
      )}
    />
    <Route
      path="/login"
      render={props => (
        <TemplateNothing>
          <LoginScreen {...props} />
        </TemplateNothing>
      )}
    />
    <Route
      path="/forgot-password"
      render={props => (
        <TemplateNothing>
          <ForgotPasswordScreen {...props} />
        </TemplateNothing>
      )}
    />

    <Route
      render={props => (
        <TemplateSidebar>
          <Error {...props} title="404" content="Sorry, the route you requested does not exist" />
        </TemplateSidebar>
      )}
    />
  </Switch>
);

export default Index;