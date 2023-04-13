// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCO24hFePRgSxepOMtREp59fRoRKk-ozk",
  authDomain: "react-84ca0.firebaseapp.com",
  projectId: "react-84ca0",
  storageBucket: "react-84ca0.appspot.com",
  messagingSenderId: "328817780359",
  appId: "1:328817780359:web:45822ab601087b86187a22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig) ;

export const db = getFirestore(app);