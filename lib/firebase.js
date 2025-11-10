// /lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBp6yHUNBivlfiJ3HuR6GQTB11tTfxBMRo",
  authDomain: "ai-nextgen-ac408.firebaseapp.com",
  projectId: "ai-nextgen-ac408",
  storageBucket: "ai-nextgen-ac408.firebasestorage.app",
  messagingSenderId: "575515609519",
  appId: "1:575515609519:web:2b1adbafd1d893877d475a",
  measurementId: "G-V2YY0B0P8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
