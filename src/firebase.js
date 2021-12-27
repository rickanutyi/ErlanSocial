import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// import { initializeApp } from "firebase/compat/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC5JWoCcrqIHh1sAYCJmZ9dMmEKyIska74",
  authDomain: "neverland-96469.firebaseapp.com",
  projectId: "neverland-96469",
  storageBucket: "neverland-96469.appspot.com",
  messagingSenderId: "833136169818",
  appId: "1:833136169818:web:a9987e7b2324ee7d501963",
  measurementId: "G-NQTPYFR1RY"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(fire)
export const storage = getStorage(fire)
export const rtdb = getDatabase();
