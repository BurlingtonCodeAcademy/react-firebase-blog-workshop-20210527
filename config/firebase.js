import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB9IRE4fCN5olYS29MwptO5WSpDYTjxKJ8",
  authDomain: "react-firebase-blog-workshop.firebaseapp.com",
  projectId: "react-firebase-blog-workshop",
  storageBucket: "react-firebase-blog-workshop.appspot.com",
  messagingSenderId: "198629097934",
  appId: "1:198629097934:web:827f41af34559910336b9f",
  measurementId: "G-HFFMX62XRP"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export default firebase;
export { auth, firestore };
