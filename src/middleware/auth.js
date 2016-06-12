import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCs4y_Z7j88Lmuirr6kGRhih1Sn-Gp56Pc',
  authDomain: 'project-6839808434370523602.firebaseapp.com'
};

firebase.initializeApp(config);

export async function fetchUserInfo(cb) {
  return firebase.auth().onAuthStateChanged(user => {
    cb(user);
  });
}

export async function authenticate(email, password) {
  return await firebase.auth().signInWithEmailAndPassword(email, password)
}
