import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFoLI1IzYrEHBKtOZ2uQ27tAnCXHJaZUs",
  authDomain: "happy-kids-eshop.firebaseapp.com",
  projectId: "happy-kids-eshop",
  storageBucket: "happy-kids-eshop.appspot.com",
  messagingSenderId: "938400376341",
  appId: "1:938400376341:web:b1b90d7611c0594958d01c",
  measurementId: "G-38H218Y62M",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
