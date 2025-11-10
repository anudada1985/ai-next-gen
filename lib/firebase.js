// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBp6yHUNBivlfiJ3HuR6GQTB11tTfxBMRo",
  authDomain: "ai-nextgen-ac408.firebaseapp.com",
  projectId: "ai-nextgen-ac408",
  storageBucket: "ai-nextgen-ac408.firebasestorage.app",
  messagingSenderId: "575515609519",
  appId: "1:575515609519:web:2b1adbafd1d893877d475a",
  measurementId: "G-V2YY0B0P8B"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
