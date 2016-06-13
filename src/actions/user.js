import { browserHistory } from 'react-router';
import { authenticate, deauthenticate, checkAuthentication, createUserAccount } from '../middleware/auth';

export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGOUT_USER = 'LOGOUT_USER';
export const UPDATE_USER = 'UPDATE_USER';

const ERRORS = {
  'auth/user-not-found': {
    type: 'email',
    message: 'The user was not found.'
  },
  'auth/invalid-email': {
    type: 'email',
    message: 'The email address is badly formatted.'
  },
  'auth/email-already-in-use': {
    type: 'email',
    message: 'The email address is already in use by another account.'
  },
  'auth/wrong-password': {
    type: 'password',
    message: 'The password is incorrect.'
  },
  'auth/weak-password': {
    type: 'password',
    message: 'The password must be 6 characters long or more.'
  },
  'auth/too-many-requests': {
    type: 'email',
    message: 'There are too many requests. Please try again in a few.'
  }
};

export function createUser(email, password) {
  return async dispatch => {
    try {
      const res = await createUserAccount(email, password);
      browserHistory.push('/');
      return dispatch(loginUserSuccess(res));
    }
    catch (e) {
      const error = ERRORS[e.code];
      dispatch(createUserFailure({ error }));
    }
  }
}

export function createUserFailure(payload) {
  return {
    type: CREATE_USER_FAILURE,
    payload
  };
}

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

export function loginUserFailure(payload) {
  return {
    type: LOGIN_USER_FAILURE,
    payload
  };
}

export function loginUser(email, password) {
  return async dispatch => {
    dispatch(loginUserRequest());

    try {
      const res = await authenticate(email, password);
      browserHistory.push('/');
      return dispatch(loginUserSuccess(res));
    }
    catch (e) {
      const error = ERRORS[e.code];
      dispatch(createUserFailure({ error }));
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
