// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import * as firebase from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2_YFrgm-L9piuUgeo2IGDZW9bKTVi-s4",
  authDomain: "my-react-ecommerce-abb63.firebaseapp.com",
  projectId: "my-react-ecommerce-abb63",
  storageBucket: "my-react-ecommerce-abb63.appspot.com",
  messagingSenderId: "389450277150",
  appId: "1:389450277150:web:68ee9ea525dded91bfe90f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
