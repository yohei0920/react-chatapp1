import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAAapJhrwgngEGwK4mxvZURm2BpmaMchrQ",
  authDomain: "chatapp-5fa41.firebaseapp.com",
  databaseURL: "https://chatapp-5fa41.firebaseio.com",
  projectId: "chatapp-5fa41",
  storageBucket: "chatapp-5fa41.appspot.com",
  messagingSenderId: "1006030962432",
  appId: "1:1006030962432:web:146665627e4dc61fecfde5",
  measurementId: "G-3V0JCXS0QS",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebase.auth();
export const db = firebase.firestore();
