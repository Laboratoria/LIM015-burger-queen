import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDksRsjpFvuRQVYRWXvxuychaTQN6fKmr4",
    authDomain: "burger-queen-aa159.firebaseapp.com",
    projectId: "burger-queen-aa159",
    storageBucket: "burger-queen-aa159.appspot.com",
    messagingSenderId: "659878264432",
    appId: "1:659878264432:web:5091ce9ae3c50c75f9feb5",
    measurementId: "G-1W05NLD9ST"
  };

  // Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();