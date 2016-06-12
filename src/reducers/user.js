import { createReducer } from 'redux-create-reducer';
import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER, UPDATE_USER } from '../actions/user';

const initialState = {};

export default createReducer(initialState, {
  [LOGIN_USER](state, action) {
    return {
      ...action.payload
    };
  },
  [LOGIN_USER_SUCCESS](state, action) {
    return {
      isAuthenticated: true,
      ...action.payload
    };
  },
  [LOGIN_USER_FAILURE](state, action) {
    return {
      isAuthenticated: false
    };
  },
  [UPDATE_USER](state, action) {
    return {
      ...state,
      ...action.payload
    };
  },
  [LOGOUT_USER](state) {
    return {
      isAuthenticated: false
    };
  }
});
