// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTy-ztMuOwZ9h3-slgYwWh4FmS7nThQlU",
  authDomain: "catdummy-7cf6f.firebaseapp.com",
  projectId: "catdummy-7cf6f",
  storageBucket: "catdummy-7cf6f.appspot.com",
  messagingSenderId: "161699213091",
  appId: "1:161699213091:web:8ae05607c8bea2919e2696"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)