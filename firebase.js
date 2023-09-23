import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC3sbS3j9rfocQ5h96-hAC6mKrw_aTKYLk",
    authDomain: "messaginapp-5dc9f.firebaseapp.com",
    projectId: "messaginapp-5dc9f",
    storageBucket: "messaginapp-5dc9f.appspot.com",
    messagingSenderId: "969422653334",
    appId: "1:969422653334:web:4c9da5fbd95e0cd6403fb7"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()