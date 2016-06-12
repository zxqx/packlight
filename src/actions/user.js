import { browserHistory } from 'react-router';
import { authenticate, deauthenticate, fetchUserInfo } from '../middleware/auth';
import gravatar from 'gravatar';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const UPDATE_USER = 'UPDATE_USER';

export function updateUser(payload) {
  return {
    type: UPDATE_USER,
    payload
  };
}

export function getUserInfo() {
  return dispatch => {
    try {
      fetchUserInfo(user => dispatch(updateUser(user)));
    }
    catch (e) {
      throw new Error(e);
    }
  }
}

export function loginUser(email, password) {
  return async dispatch => {
    try {
      const res = await authenticate(email, password);

      browserHistory.push('/');

      return dispatch(updateUser({
        email: res.email,
        avatar: res.avatar
      }));
    }
    catch (e) {
      throw new Error(e);
    }
  }
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
