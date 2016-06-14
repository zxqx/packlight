import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import cssModules from 'react-css-modules';
import styles from '../style/gear-list-list.scss';

@cssModules(styles)
export default class GearListList extends Component {
  static propTypes = {
    gearLists: PropTypes.array.isRequired,
    selectedGearList: PropTypes.string,
    styles: PropTypes.object
  };

  render() {
    const { styles, gearLists, selectedGearList } = this.props;

    return (
      <div className={styles.container}>
        <h4 className={styles.h4}>Gear Lists</h4>

        <ul className={styles.list}>
          {gearLists.map(gearList =>
            <li key={gearList.id}>
              <Link className={ gearList.id === selectedGearList ? styles.selected : null} to={`/lists/${gearList.id}`}>{gearList.name}</Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
