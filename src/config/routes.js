import React from 'react';
import { Route } from 'react-router';
import App from '../containers/App';
import LoginPage from '../containers/LoginPage';
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
      <Route path="/" onEnter={requireAuthentication} component={AddGearPage} />
      <Route path="/another" component={AnotherPage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  );
}
