import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import Header from '../components/Header';
import styles from '../style/index.css';

@CSSModules(styles)
export default class Main extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  };

  render() {
    const { styles } = this.props;

    return (
      <div className={styles.main}>
        <Header />
        {/* this will render the child routes */}
        {this.props.children}
      </div>
    );
  }
}
