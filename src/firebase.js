// import firebase from 'firebase/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyC2Dn32GYSuWa6dvWr4Y-FEpRmBlbM6YuQ",
//   authDomain: "sri-komal-jewellers.firebaseapp.com",
//   projectId: "sri-komal-jewellers",
//   storageBucket: "sri-komal-jewellers.appspot.com",
//   messagingSenderId: "863161387206",
//   appId: "1:863161387206:web:bf52386f6ed9061391efc7",
//   measurementId: "G-ZVL7NGTCE4",
// };

// // Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
// export default firebase;

// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2Dn32GYSuWa6dvWr4Y-FEpRmBlbM6YuQ",
  authDomain: "sri-komal-jewellers.firebaseapp.com",
  projectId: "sri-komal-jewellers",
  storageBucket: "sri-komal-jewellers.appspot.com",
  messagingSenderId: "863161387206",
  appId: "1:863161387206:web:bf52386f6ed9061391efc7",
  measurementId: "G-ZVL7NGTCE4",
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
