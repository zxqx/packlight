import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import GearItem from './GearItem';
import GearWeightTotal from './GearWeightTotal';
import styles from '../style/gear-list.scss';

@cssModules(styles)
export default class GearList extends Component {
  static propTypes = {
    styles: PropTypes.object,
    items: PropTypes.array.isRequired,
    removeGearItem: PropTypes.func.isRequired
  };

  render() {
    const { styles, items, removeGearItem } = this.props;

    return (
      <div className={styles.container}>
        <table className={styles.list}>
          <tbody>
            {items.map((item, index) =>
              <GearItem key={index} item={item} removeGearItem={removeGearItem} />
            )}

            {items.length ?
              <GearWeightTotal items={items} />
            : null}
          </tbody>
        </table>
      </div>
    );
  }
}
