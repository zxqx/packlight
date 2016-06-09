import { createReducer } from 'redux-create-reducer';
import { ADD_GEAR_ITEM } from '../actions/gearList';

const initialState = [];

export default createReducer(initialState, {
  [ADD_GEAR_ITEM](state, action) {
    return [
      ...state,
      action.payload
    ];
  }
});
