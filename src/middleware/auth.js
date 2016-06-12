import firebase from 'firebase';
import gravatar from 'gravatar';

const config = {
  apiKey: 'AIzaSyCs4y_Z7j88Lmuirr6kGRhih1Sn-Gp56Pc',
  authDomain: 'project-6839808434370523602.firebaseapp.com'
};

firebase.initializeApp(config);

export function fetchUserInfo(cb) {
  return firebase.auth().onAuthStateChanged(res => {
    let avatar = gravatar.url(res.email);

    cb({
      email: res.email,
      avatar
    });
  });
}

export async function deauthenticate() {
  return await firebase.auth().signOut();
}

export async function authenticate(email, password) {
  let res = await firebase.auth().signInWithEmailAndPassword(email, password);
  let avatar = await gravatar.url(email);

  return {
    email: res.email,
    avatar
  };
}
