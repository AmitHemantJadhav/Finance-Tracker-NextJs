// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsZRkPoNcaD1bV6pCGn-xArdMERIxBVtY",
  authDomain: "spendwise-92986.firebaseapp.com",
  projectId: "spendwise-92986",
  storageBucket: "spendwise-92986.appspot.com",
  messagingSenderId: "1051322091271",
  appId: "1:1051322091271:web:a3d04a2c942e49db97a7a2",
  measurementId: "G-H1TXB7PCZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {app,db }