// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByV_r5MJIi7BWDT-7nRnRuNOaD1rUH8qw",
  authDomain: "residential-real-estate-1de6b.firebaseapp.com",
  projectId: "residential-real-estate-1de6b",
  storageBucket: "residential-real-estate-1de6b.appspot.com",
  messagingSenderId: "882221097094",
  appId: "1:882221097094:web:a858d4456c197b3756b107"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;