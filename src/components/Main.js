import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { RouteTransition, presets } from 'react-router-transition';
import cssModules from 'react-css-modules';
import Header from '../components/Header';
import * as UserActions from '../actions/user';
import wrapActionCreators from '../utils/wrap-action-creators';
import styles from '../style/index.scss';

@connect(state => ({
  user: state.user
}), wrapActionCreators(UserActions))
@cssModules(styles)
export default class Main extends Component {
  static propTypes = {
    styles: PropTypes.object,
    user: PropTypes.object,
    children: PropTypes.any
  };

  render() {
    const { styles, user, logoutUser } = this.props;

    return (
      <div>
        <Header user={user} logoutUser={logoutUser} />

        <RouteTransition
          pathname={this.props.location.pathname}
          {...presets.pop}>

          <div className={styles.main}>
            {/* this will render the child routes */}
            {this.props.children}
          </div>
        </RouteTransition>
      </div>
    );
  }
}
