import React, { Component, PropTypes } from 'react';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import { Link } from 'react-router';
import cssModules from 'react-css-modules';
import styles from '../style/header.scss';
import 'react-simple-dropdown/styles/Dropdown.css';

@cssModules(styles)
export default class Header extends Component {
  static propTypes = {
    logoutUser: PropTypes.func.isRequired,
    dropdownStyles: PropTypes.object,
    styles: PropTypes.object
  };

  logoutUser() {
    this.props.logoutUser();
  }

  render() {
    const { styles, user } = this.props;

    return (
      <div className={styles.navbar}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link to="/" className={styles.heading}>
              <h2 className={styles.h2}>packlight</h2>
            </Link>
          </div>

          {user.isAuthenticated ?
            <Dropdown className={styles.user}>
              <DropdownTrigger>
                <img className={styles.avatar} src={user.avatar} alt={user.email} />
                {user.email}
                <span className={styles.caret}>&#9660;</span>
              </DropdownTrigger>
              <DropdownContent styleName='dropdown-content'>
                <ul>
                  <li>
                    <a onClick={this.logoutUser.bind(this)}>Log Out</a>
                  </li>
                </ul>
              </DropdownContent>
            </Dropdown>
            :
            <Link to="/login" styleName='login-btn'>Log in</Link>
          }
        </div>
      </div>
    );
  }
}
