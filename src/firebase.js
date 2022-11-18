// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAslKjI9FQP06wPAD5Xbj4kUS-7h7v8N80",
  authDomain: "chat-8e82c.firebaseapp.com",
  projectId: "chat-8e82c",
  storageBucket: "chat-8e82c.appspot.com",
  messagingSenderId: "793869470881",
  appId: "1:793869470881:web:53703725aae9b1d04bf4e0"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()