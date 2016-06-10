import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ui from 'redux-ui';
import AddGearForm from '../components/AddGearForm';
import GearList from '../components/GearList';
import * as GearListActions from '../actions/gearList';
import wrapActionCreators from '../utils/wrapActionCreators';

@connect(state => ({
  gearList: state.gearList
}), wrapActionCreators(GearListActions))
@ui({ key: 'addGearPage' })
export default class AddGearPage extends Component {
  static propTypes = {
    gearList: PropTypes.array.isRequired,
    addGearItem: PropTypes.func.isRequired,
    getGearListSuggestions: PropTypes.func.isRequired
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
