import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from '../style/gear-list.css';

@cssModules(styles)
export default class GearListList extends Component {
  static propTypes = {
    styles: PropTypes.object
  };

  render() {
    const { styles } = this.props;

    return (
      <div className={styles.container}>
        asdad
      </div>
    );
  }
}
