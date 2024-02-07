
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDC0I25tm_HWrLuejPZ4kQuFUuvXjNN4C8",
  authDomain: "react-ramos.firebaseapp.com",
  projectId: "react-ramos",
  storageBucket: "react-ramos.appspot.com",
  messagingSenderId: "53444940694",
  appId: "1:53444940694:web:bf1ad7fd97603e6e1f43b7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
