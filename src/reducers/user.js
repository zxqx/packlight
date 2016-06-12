import { createReducer } from 'redux-create-reducer';
import { LOGIN_USER, LOGOUT_USER, UPDATE_USER } from '../actions/user';

const initialState = {};

export default createReducer(initialState, {
  [LOGIN_USER](state, action) {
    return action.payload;
  },
  [UPDATE_USER](state, action) {
    return {
      ...state,
      ...action.payload
    };
  },
  [LOGOUT_USER](state) {
    return {};
  }
});
