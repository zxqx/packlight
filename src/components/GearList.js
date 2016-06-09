import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import GearItem from './GearItem';
import GearWeightTotal from './GearWeightTotal';
import styles from '../style/gear-list.css';

@CSSModules(styles)
export default class GearList extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    const { styles, items } = this.props;

    return (
      <div className={styles.container}>
        <table className={styles.list}>
          <tbody>
            {items.map((item, index) =>
              <GearItem key={index} item={item} />
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
