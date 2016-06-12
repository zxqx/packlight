import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from '../components/Main';

@connect()
export default class App extends Component {
  render() {
    return (
      <Main {...this.props} />
    );
  }
}
