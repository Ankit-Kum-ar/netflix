// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM5yLGQl811exPugAgy9yebY3CeZeLKCs",
  authDomain: "netflix-40e44.firebaseapp.com",
  projectId: "netflix-40e44",
  storageBucket: "netflix-40e44.appspot.com",
  messagingSenderId: "184029963110",
  appId: "1:184029963110:web:9d1f6adb2fcd3d4a3b5ea7",
  measurementId: "G-479391PTVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();