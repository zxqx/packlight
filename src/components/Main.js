import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import Header from '../components/Header';
import { getUserInfo } from '../actions/user';
import styles from '../style/index.scss';

@connect(state => ({
  user: state.user
}))
@cssModules(styles)
export default class Main extends Component {
  static propTypes = {
    styles: PropTypes.object,
    user: PropTypes.object,
    children: PropTypes.any.isRequired
  };

  componentDidMount() {
    this.props.dispatch(getUserInfo());
  }

  render() {
    const { styles, user } = this.props;

    return (
      <div>
        <Header user={user} />

        <div className={styles.main}>
          {/* this will render the child routes */}
          {this.props.children}
        </div>
      </div>
    );
  }
}
