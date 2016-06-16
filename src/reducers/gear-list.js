import { createReducer } from 'redux-create-reducer';
import { UPDATE_GEAR_LISTS, ADD_GEAR_ITEM, REMOVE_GEAR_ITEM } from '../actions/gear-list';

const initialState = {};

export default createReducer(initialState, {
  [UPDATE_GEAR_LISTS](state, action) {
    return action.payload;
  },
  [ADD_GEAR_ITEM](state, action) {
    return {
      ...state,
      [action.payload.gearList.id]: {
        ...action.payload.gearList,
        items: [
          ...action.payload.gearList.items,
          action.payload.item
        ]
      }
    };
  },
  [REMOVE_GEAR_ITEM](state, action) {
    return {
      ...state,
      [action.payload.gearList.id]: {
        ...action.payload.gearList,
        items: state[action.payload.gearList.id].items.filter(item => item.id !== action.payload.item.id)
      }
    };
  }
});

