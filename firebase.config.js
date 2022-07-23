import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDBrFdwLahOdFNeu0oKYUL477jrPs72CHo",
  authDomain: "code-verse.firebaseapp.com",
  projectId: "code-verse",
  storageBucket: "code-verse.appspot.com",
  messagingSenderId: "917696618951",
  appId: "1:917696618951:web:195d0ae3dd71fe562cb9e2",
  measurementId: "G-Z48P6VH15G",
};

export const FirebaseApp = initializeApp(firebaseConfig);
