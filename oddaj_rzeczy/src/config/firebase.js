import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/firebase-database";
import "firebase/firebase-storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  databaseURL: "https://oddaj-rzecz.firebaseio.com",
  apiKey: "AIzaSyDHcosD1kiiYJ0HIyBzqMUsRM2RYuwe2F4",
  authDomain: "oddaj-rzecz.firebaseapp.com",
  projectId: "oddaj-rzecz",
  storageBucket: "oddaj-rzecz.appspot.com",
  messagingSenderId: "356204634580",
  appId: "1:356204634580:web:fb68689604a7bf14cff641",
  measurementId: "G-RYSSLPBBPM",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const storage = firebase.storage();
const db = firebase.firestore();
export { db, storage };
