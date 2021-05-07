import firebase from 'firebase/app';
import'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAZNcF_mmSa5JySPWXVllxZ9xIULZNa5pg",
  authDomain: "todolist-7df37.firebaseapp.com",
  databaseURL: "https://todolist-7df37-default-rtdb.firebaseio.com",
  projectId: "todolist-7df37",
  storageBucket: "todolist-7df37.appspot.com",
  messagingSenderId: "391602905633",
  appId: "1:391602905633:web:8d023310e6dbac8b447960"
});

export { firebaseConfig as firebase };