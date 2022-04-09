import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnvwW6IXuDiM7xnM-1OlOtUIdRYph3ZsI",
  authDomain: "my-own-dictionary-11804.firebaseapp.com",
  projectId: "my-own-dictionary-11804",
  storageBucket: "my-own-dictionary-11804.appspot.com",
  messagingSenderId: "11421794204",
  appId: "1:11421794204:web:f5c1625b1faefc7e945259",
};

initializeApp(firebaseConfig);

export const db = getFirestore();
