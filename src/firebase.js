// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCjgkFbwc3aRm_-bL3xouXjf7tcBzknuU",
  authDomain: "lab07-b8727.firebaseapp.com",
  projectId: "lab07-b8727",
  storageBucket: "lab07-b8727.appspot.com",
  messagingSenderId: "649687567238",
  appId: "1:649687567238:web:c35a25f00c4ee635857a07",
  measurementId: "G-G09392TJF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();