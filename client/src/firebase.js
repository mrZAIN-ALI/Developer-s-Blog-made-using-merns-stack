// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "zee-blog-bfb54.firebaseapp.com",
  projectId: "zee-blog-bfb54",
  storageBucket: "zee-blog-bfb54.appspot.com",
  messagingSenderId: "511430943504",
  appId: "1:511430943504:web:b50ab00285944a2cd2bb95"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);