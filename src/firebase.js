// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAdGnRzO9-Y8pjQ9x733psgbUArAaSZFBM",
  authDomain: "tik-tok-clone-87b94.firebaseapp.com",
  projectId: "tik-tok-clone-87b94",
  storageBucket: "tik-tok-clone-87b94.appspot.com",
  messagingSenderId: "713648363637",
  appId: "1:713648363637:web:b3ee91e781e2aa80d5803c",
  measurementId: "G-HFC2Z44C4Z"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

export default db;
