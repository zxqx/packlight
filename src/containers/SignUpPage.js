import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ui from 'redux-ui';
import SignUpForm from 'components/SignUpForm';
import * as UserActions from 'actions/user';
import wrapActionCreators from 'utils/wrap-action-creators';

@ui({ key: 'signUpPage' })
@connect(state => ({
  user: state.user
}), wrapActionCreators(UserActions))
export default class SignUpPage extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    createUser: PropTypes.func.isRequired
  };

  render() {
    return (
      <SignUpForm {...this.props} />
    );
  }
}
