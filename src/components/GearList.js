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

  removeGearItem(item) {
    const { gearList } = this.props;
    this.props.removeGearItem({ gearList, item });
  }

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
              <GearItem key={index} item={item} removeGearItem={() => this.removeGearItem(item)} />
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
