import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3l2nxuHCY2jihkvKfwnZOikTNDjXkoAw",
  authDomain: "chatapp-641c1.firebaseapp.com",
  projectId: "chatapp-641c1",
  storageBucket: "chatapp-641c1.appspot.com",
  messagingSenderId: "622268756237",
  appId: "1:622268756237:web:d5232a0d4aee1195ba8044"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
