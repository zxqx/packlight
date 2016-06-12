import { browserHistory } from 'react-router';
import { authenticate, deauthenticate, checkAuthentication } from '../middleware/auth';

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGOUT_USER = 'LOGOUT_USER';
export const UPDATE_USER = 'UPDATE_USER';

export function loginUserRequest() {
  return {
    type: LOGIN_USER_REQUEST
  };
}

export function loginUserSuccess(payload) {
  return {
    type: LOGIN_USER_SUCCESS,
    payload
  };
}

export function loginUserFailure() {
  return {
    type: LOGIN_USER_FAILURE
  };
}

export function loginUser(email, password) {
  return async dispatch => {
    dispatch(loginUserRequest());

    try {
      const res = await authenticate(email, password);

      browserHistory.push('/');

      return dispatch(loginUserSuccess({
        email: res.email,
        avatar: res.avatar
      }));
    }
    catch (e) {
      dispatch(loginUserFailure());
    }
  }
}

export function checkAuth() {
  return dispatch => {
    dispatch(loginUserRequest());

    try {
      checkAuthentication(user => {
        if (user.email) {
          return dispatch(loginUserSuccess(user));
        }
        else {
          browserHistory.push('/login');
          return dispatch(loginUserFailure());
        }
      });
    }
    catch (e) {
      throw new Error(e);
    }
  }
}

export function updateUser(payload) {
  return {
    type: UPDATE_USER,
    payload
  };
}

export function logoutUser() {
  return async dispatch => {
    try {
      await deauthenticate();

      browserHistory.push('/login');

      return dispatch({
        type: LOGOUT_USER
      });
    }
    catch (e) {
      throw new Error(e);
    }
  }
}
