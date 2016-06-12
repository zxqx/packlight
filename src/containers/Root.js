import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import getRoutes from '../config/routes';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <Router history={history} routes={getRoutes(store)} />
      </Provider>
    );
  }
}
