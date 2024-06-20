// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernestate-7faf8.firebaseapp.com",
  projectId: "mernestate-7faf8",
  storageBucket: "mernestate-7faf8.appspot.com",
  messagingSenderId: "6543281353",
  appId: "1:6543281353:web:7f7badc1edc7aef8fb5118"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);