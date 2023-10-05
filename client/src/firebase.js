// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBruGKE80O7q13xFX4QEeZ0NXCeLzP23FQ",
  authDomain: "learning-1df34.firebaseapp.com",
  projectId: "learning-1df34",
  storageBucket: "learning-1df34.appspot.com",
  messagingSenderId: "15950505145",
  appId: "1:15950505145:web:acb4b7473d4ae267e1a768",
  measurementId: "G-F8W49T58PL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);

export default app;