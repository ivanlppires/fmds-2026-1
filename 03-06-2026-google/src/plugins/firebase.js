// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU34K4YSQYGqewpznrmUcoDH8rhpWa-VQ",
  authDomain: "fmds2026-1-92e7b.firebaseapp.com",
  projectId: "fmds2026-1-92e7b",
  storageBucket: "fmds2026-1-92e7b.firebasestorage.app",
  messagingSenderId: "256266040510",
  appId: "1:256266040510:web:697ec7ec6544ec25069aef"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;