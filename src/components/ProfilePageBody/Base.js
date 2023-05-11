// import _default from '@mui/material/styles/identifier';
// import firebase from 'firebase'import firebase from 'firebase/compat/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBlwb6hik8qeAXZiVzIGDINEwVUXnX4h_0",
  authDomain: "linkedin-e6ac7.firebaseapp.com",
  projectId: "linkedin-e6ac7",
  storageBucket: "linkedin-e6ac7.appspot.com",
  messagingSenderId: "151766117911",
  appId: "1:151766117911:web:a7734a0c5a29063a8a3652",
  measurementId: "G-DL0DT9SE5C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export  {db, auth};