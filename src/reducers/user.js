import { createReducer } from 'redux-create-reducer';
import { UPDATE_USER } from '../actions/user';

const initialState = {};

export default createReducer(initialState, {
  [UPDATE_USER](state, action) {
    return {
      ...state,
      ...action.payload
    };
  }
});
