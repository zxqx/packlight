import { createReducer } from 'redux-create-reducer';
import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER, UPDATE_USER } from '../actions/user';

const initialState = {
  attemptedAuthentication: false
};

export default createReducer(initialState, {
  [LOGIN_USER_REQUEST](state, action) {
    return {
      attemptedAuthentication: true
    };
  },
  [LOGIN_USER_SUCCESS](state, action) {
    return {
      ...state,
      isAuthenticated: true,
      ...action.payload
    };
  },
  [LOGIN_USER_FAILURE](state, action) {
    return {
      ...state,
      ...action.payload,
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
