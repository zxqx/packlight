import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AddGearForm from '../components/AddGearForm';
import GearList from '../components/GearList';
import * as GearListActions from '../actions/gearList';
import wrapActionCreators from '../utils/wrapActionCreators';

@connect(state => ({
  gearList: state.gearList
}), wrapActionCreators(GearListActions))
export default class HomePage extends Component {
  static propTypes = {
    gearList: PropTypes.array.isRequired
  };

  render() {
    const { gearList, addGearItem, getGearListSuggestions } = this.props;

    return (
      <div>
        <AddGearForm
          addGearItem={addGearItem}
          getGearListSuggestions={getGearListSuggestions}
        />

        <GearList items={gearList} />
      </div>
    );
  }
}
