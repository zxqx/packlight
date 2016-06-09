import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from '../style/header.css';

@cssModules(styles)
export default class Header extends Component {
  static propTypes = {
    styles: PropTypes.object
  };

  render() {
    const { styles } = this.props;

    return (
      <div>
        <h2 className={styles.h2}>packlight</h2>
      </div>
    );
  }
}
