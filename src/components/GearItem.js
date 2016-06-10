import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from '../style/gear-item.scss';

@cssModules(styles)
export default class GearItem extends Component {
  static propTypes = {
    styles: PropTypes.object,
    item: PropTypes.object.isRequired
  };

  render() {
    const { styles, item } = this.props;

    return (
      <tr>
        <td className={styles.image}>
          <img src={item.image} className={styles.thumbnail} />
        </td>
        <td className={styles.name}>{item.name}</td>
        <td className={styles.weight}>{item.weight} lb</td>
      </tr>
    );
  }
}
