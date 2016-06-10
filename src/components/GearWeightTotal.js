import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from '../style/gear-weight-total.scss';

@cssModules(styles)
export default class GearWeightTotal extends Component {
  static propTypes = {
    styles: PropTypes.object,
    items: PropTypes.array.isRequired
  };

  getWeightTotal(items) {
    return items
      .map(i => i.weight)
      .reduce((a, b) => a + b, 0);
  }

  render() {
    const { styles, items } = this.props;
    const total = this.getWeightTotal(items);

    return (
      <tr className={styles.total}>
        <td></td>
        <td>Total</td>
        <td className={styles.weight}>
          <span>{total.toFixed(3)} lb</span>
        </td>
      </tr>
    );
  }
}
