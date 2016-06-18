import React, { Component, PropTypes } from 'react';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import cssModules from 'react-css-modules';
import styles from 'style/header.scss';
import 'react-simple-dropdown/styles/Dropdown.css';

@cssModules(styles)
export default class Header extends Component {
  static propTypes = {
    logoutUser: PropTypes.func.isRequired,
    styles: PropTypes.object
  };

  logoutUser() {
    this.props.logoutUser();
  }

  render() {
    const { styles, user } = this.props;

    return (
      <Dropdown className={styles.user}>
        <DropdownTrigger>
          <img className={styles.avatar} src={user.avatar} alt={user.email} />
          {user.email}
          <span className={styles.caret}>&#9660;</span>
        </DropdownTrigger>

        <DropdownContent styleName="dropdown-content">
          <ul>
            <li>
              <a onClick={this.logoutUser.bind(this)}>Log Out</a>
            </li>
          </ul>
        </DropdownContent>
      </Dropdown>
    );
  }
}
