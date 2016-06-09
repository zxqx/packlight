import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../style/gear-item.css';

@CSSModules(styles)
export default class GearItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { styles, item } = this.props;

    return (
      <tr>
        <td className={styles.name}>{item.name}</td>
        <td className={styles.weight}>{item.weight} lb</td>
      </tr>
    );
  }
}
