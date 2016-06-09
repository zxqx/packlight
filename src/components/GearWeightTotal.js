import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../style/gear-weight-total.css';

@CSSModules(styles)
export default class GearWeightTotal extends Component {
  static propTypes = {
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
          {items.reduce((a, b) => <span>{total.toFixed(3)} lb</span>, 0)}
        </td>
      </tr>
    );
  }
}
