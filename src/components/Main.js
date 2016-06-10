import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import Header from '../components/Header';
import styles from '../style/index.css';

@cssModules(styles)
export default class Main extends Component {
  static propTypes = {
    styles: PropTypes.object,
    children: PropTypes.any.isRequired
  };

  render() {
    const { styles } = this.props;

    return (
      <div>
        <Header />

        <div className={styles.main}>
          {/* this will render the child routes */}
          {this.props.children}
        </div>
      </div>
    );
  }
}
