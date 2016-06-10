import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from '../style/gear-list-list.css';

@cssModules(styles)
export default class GearListList extends Component {
  static propTypes = {
    styles: PropTypes.object
  };

  render() {
    const { styles } = this.props;

    return (
      <div className={styles.container}>
        <h4 className={styles.h4}>Gear Lists</h4>

        <ul className={styles.list}>
          <li>Winter 2-Day</li>
          <li>Overnight</li>
          <li>Summer Week</li>
          <li>Car Camping</li>
        </ul>
      </div>
    );
  }
}
