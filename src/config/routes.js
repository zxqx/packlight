import React from 'react';
import { Route } from 'react-router';
import App from '../containers/App';
import AddGearPage from '../containers/AddGearPage';
import AnotherPage from '../containers/AnotherPage';
import NotFoundPage from '../containers/NotFoundPage';

export default (
  <Route component={App}>
    <Route path="/" component={AddGearPage} />
    <Route path="/another" component={AnotherPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);