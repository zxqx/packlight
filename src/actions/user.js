import { authenticate, fetchUserInfo } from '../middleware/auth';

export const LOGIN_USER = 'LOGIN_USER';
export const UPDATE_USER = 'UPDATE_USER';

export function updateUser(payload) {
  return {
    type: UPDATE_USER,
    payload
  };
}

export function getUserInfo() {
  return async dispatch => {
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
      return dispatch(updateUser({ email: res.email }));
    }
    catch (e) {
      throw new Error(e);
    }
  }
}
