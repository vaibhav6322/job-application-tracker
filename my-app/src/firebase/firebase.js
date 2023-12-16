// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvVMnGW0l279ma4xL9eN8l7Jjnxd5rfI0",
  authDomain: "basic1-c2d97.firebaseapp.com",
  databaseURL: "https://basic1-c2d97-default-rtdb.firebaseio.com",
  projectId: "basic1-c2d97",
  storageBucket: "basic1-c2d97.appspot.com",
  messagingSenderId: "100314015768",
  appId: "1:100314015768:web:e32b055b509e65fb0ffb6d",
  measurementId: "G-MPF0F4NBHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth, signInWithEmailAndPassword };