import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUFF_0pSX01NhpW68OSsl0dvngOWXyr2g",
  authDomain: "linkup-421108.firebaseapp.com",
  projectId: "linkup-421108",
  storageBucket: "linkup-421108.appspot.com",
  messagingSenderId: "306797522552",
  appId: "1:306797522552:web:d5660dcbb8063f5320078d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth, provider}
