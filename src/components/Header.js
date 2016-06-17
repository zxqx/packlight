import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import cssModules from 'react-css-modules';
import UserInfo from './UserInfo';
import styles from '../style/header.scss';

@cssModules(styles)
export default class Header extends Component {
  static propTypes = {
    logoutUser: PropTypes.func.isRequired,
    styles: PropTypes.object
  };

  render() {
    const { styles, user, logoutUser } = this.props;

    return (
      <div className={styles.navbar}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link to="/" className={styles.heading}>
              <h2 className={styles.h2}>packlight</h2>
            </Link>
          </div>

          {user.isAuthenticated ?
            <UserInfo user={user} logoutUser={logoutUser} />
            : <Link to="/login" styleName="login-btn">Log in</Link>
          }
        </div>
      </div>
    );
  }
}
