import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ui from 'redux-ui';
import cssModules from 'react-css-modules';
import AddGearForm from '../components/AddGearForm';
import GearList from '../components/GearList';
import GearListList from '../components/GearListList';
import * as GearListActions from '../actions/gearList';
import wrapActionCreators from '../utils/wrapActionCreators';
import styles from '../style/content.css';

@connect(state => ({
  gearList: state.gearList
}), wrapActionCreators(GearListActions))
@ui({ key: 'addGearPage' })
@cssModules(styles)
export default class AddGearPage extends Component {
  static propTypes = {
    gearList: PropTypes.array.isRequired,
    addGearItem: PropTypes.func.isRequired,
    getGearListSuggestions: PropTypes.func.isRequired
  };

  render() {
    const { gearList, addGearItem, getGearListSuggestions } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <GearListList />
        </div>

        <div className={styles.content}>
          <AddGearForm
            addGearItem={addGearItem}
            getGearListSuggestions={getGearListSuggestions}
          />

          <GearList items={gearList} />
        </div>
      </div>
    );
  }
}
