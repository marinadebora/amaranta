// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzP3uE3YipTtkHjmaTEo_BQU4RwvgNAPw",
  authDomain: "amarantacaferesto-69cf8.firebaseapp.com",
  projectId: "amarantacaferesto-69cf8",
  storageBucket: "amarantacaferesto-69cf8.firebasestorage.app",
  messagingSenderId: "379883933583",
  appId: "1:379883933583:web:bee75e2945ca1819cb85fa",
  measurementId: "G-W3YXRMHLV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)
