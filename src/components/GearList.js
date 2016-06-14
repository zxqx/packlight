import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import GearItem from './GearItem';
import GearWeightTotal from './GearWeightTotal';
import styles from '../style/gear-list.scss';

@cssModules(styles)
export default class GearList extends Component {
  static propTypes = {
    styles: PropTypes.object,
    gearList: PropTypes.object.isRequired,
    removeGearItem: PropTypes.func.isRequired
  };

  render() {
    const { styles, gearList, removeGearItem } = this.props;

    if (!gearList.items) {
      return <div></div>;
    }

    return (
      <div className={styles.container}>
        <table className={styles.list}>
          <tbody>
            {gearList.items.map((item, index) =>
              <GearItem key={index} item={item} removeGearItem={removeGearItem} />
            )}

            {gearList.items.length ?
              <GearWeightTotal items={gearList.items} />
            : null}
          </tbody>
        </table>
      </div>
    );
  }
}
