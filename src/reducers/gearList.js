import { createReducer } from 'redux-create-reducer';
import { ADD_GEAR_ITEM } from '../actions/gearList';

const initialState = [
  {
    name: 'Eagles Nest Outfitters - SingleNest Hammock',
    weight: 1
  },
  {
    name: 'Carhartt Men\'s Workwear Short Sleeve T-Shirt in Original Fit K88',
    weight: 3
  },
  {
    name: 'Black Diamond Storm Head Lamp',
    weight: 0.55
  },
  {
    name: 'Black Diamond Titan Lantern - Dark Chocolate',
    weight: 1
  },
  {
    name: 'MinnKota MK 315D On-Board Battery Charger (3 Banks, 5 Amps per Bank)',
    weight: 15.43
  },
];

export default createReducer(initialState, {
  [ADD_GEAR_ITEM](state, action) {
    return [
      ...state,
      action.payload
    ];
  }
});
