import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ui from 'redux-ui';
import LoginForm from '../components/LoginForm';
import * as UserActions from '../actions/user';
import wrapActionCreators from '../utils/wrap-action-creators';

@ui({ key: 'loginPage' })
@connect(state => ({
  user: state.user
}), wrapActionCreators(UserActions))
export default class LoginPage extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired
  };

  render() {
    return (
      <LoginForm {...this.props} />
    );
  }
}
