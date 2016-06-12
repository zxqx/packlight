import firebase from 'firebase';
import dotenv from 'dotenv';

dotenv.load();

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'project-6839808434370523602.firebaseapp.com'
};

firebase.initializeApp(config);

export async function authenticate(email, password) {
  return await firebase.auth().signInWithEmailAndPassword(email, password)
}
