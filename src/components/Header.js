import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../style/header.css';

@CSSModules(styles)
export default class Header extends Component {
  render() {
    const { styles } = this.props;

    return (
      <div>
        <h2 className={styles.h2}>packlight</h2>
      </div>
    );
  }
}
