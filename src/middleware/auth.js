import firebase from 'firebase';
import gravatar from 'gravatar';

const config = {
  apiKey: 'AIzaSyCs4y_Z7j88Lmuirr6kGRhih1Sn-Gp56Pc',
  authDomain: 'project-6839808434370523602.firebaseapp.com'
};

firebase.initializeApp(config);

// TODO - Promisify this
export function checkAuthentication(cb) {
  return firebase.auth().onAuthStateChanged(res => {
    if (res) {
      let avatar = gravatar.url(res.email);

      cb({
        email: res.email,
        avatar
      });
    }
    else {
      cb({});
    }
  });
}

export async function createUserAccount(email, password) {
  const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
  const avatar = await gravatar.url(email);

  return {
    email: res.email,
    avatar
  };
}

export async function authenticate(email, password) {
  const res = await firebase.auth().signInWithEmailAndPassword(email, password);
  if (res.code) {
    return Promise.reject(res);
  }

  const avatar = await gravatar.url(email);

  return {
    email: res.email,
    avatar
  };
}

export async function deauthenticate() {
  return await firebase.auth().signOut();
}
