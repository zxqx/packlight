import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import cssModules from 'react-css-modules';
import styles from '../style/header.scss';

@cssModules(styles)
export default class Header extends Component {
  static propTypes = {
    styles: PropTypes.object
  };

  render() {
    const { styles, user } = this.props;

    return (
      <div className={styles.navbar}>
        <div className={styles.brand}>
          <Link to="/" className={styles.heading}>
            <h2 className={styles.h2}>packlight</h2>
          </Link>
        </div>

        <div className={styles.user}>
          {user.email}
        </div>
      </div>
    );
  }
}
