import React from 'react';
import { Route, Redirect } from 'react-router';
import App from '../containers/App';
import LoginPage from '../containers/LoginPage';
import SignUpPage from '../containers/SignUpPage';
import AddGearPage from '../containers/AddGearPage';
import AnotherPage from '../containers/AnotherPage';
import NotFoundPage from '../containers/NotFoundPage';
import { checkAuth } from '../actions/user';

export default (store) => {
  function requireAuthentication() {
    store.dispatch(checkAuth());
  }

  return (
    <Route component={App}>
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Redirect from="/" to="/lists/overnight" />
      <Route path="/lists/:listId" onEnter={requireAuthentication} component={AddGearPage} />
      <Route path="/another" component={AnotherPage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  );
}
