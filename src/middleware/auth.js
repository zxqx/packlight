import firebase from 'firebase';
import dotenv from 'dotenv';

dotenv.load();

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN
};

firebase.initializeApp(config);

export async function authenticate(email, password) {
  return await firebase.auth().signInWithEmailAndPassword(email, password)
}
