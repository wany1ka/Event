// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUFF_0pSX01NhpW68OSsl0dvngOWXyr2g",
  authDomain: "linkup-421108.firebaseapp.com",
  projectId: "linkup-421108",
  storageBucket: "linkup-421108.appspot.com",
  messagingSenderId: "306797522552",
  appId: "1:306797522552:web:d5660dcbb8063f5320078d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);