// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvPsFlm7r9CIzjS9Yc9BSnLa-4yHlB5aw",
  authDomain: "turistere.firebaseapp.com",
  databaseURL: "https://turistere-default-rtdb.firebaseio.com",
  projectId: "turistere",
  storageBucket: "turistere.appspot.com",
  messagingSenderId: "42335702179",
  appId: "1:42335702179:web:7e1262d1fdb4b94de18316",
  measurementId: "G-SH1BK6Z065",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase();