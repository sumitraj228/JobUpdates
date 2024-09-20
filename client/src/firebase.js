// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "jobupdates-1ded9.firebaseapp.com",
  projectId: "jobupdates-1ded9",
  storageBucket: "jobupdates-1ded9.appspot.com",
  messagingSenderId: "956249926664",
  appId: "1:956249926664:web:a9d9d30e270f30e84a75bd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

