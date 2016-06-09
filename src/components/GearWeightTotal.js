import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from '../style/gear-weight-total.css';

@cssModules(styles)
export default class GearWeightTotal extends Component {
  static propTypes = {
    styles: PropTypes.object,
    items: PropTypes.array.isRequired
  };

  render() {
    const { styles, items } = this.props;

    const total = items
      .map(i => i.weight)
      .reduce((a, b) => a + b, 0);

    return (
      <tr className={styles.total}>
        <td>Total</td>
        <td className={styles.weight}>
          <span>{total.toFixed(3)} lb</span>
        </td>
      </tr>
    );
  }
}
