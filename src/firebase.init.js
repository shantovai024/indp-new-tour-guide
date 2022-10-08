// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-bVlyKqPFJBVXI9o6EDvrzGFunAe_Yw8",
  authDomain: "tour-guide-66612.firebaseapp.com",
  projectId: "tour-guide-66612",
  storageBucket: "tour-guide-66612.appspot.com",
  messagingSenderId: "109667988881",
  appId: "1:109667988881:web:e9de812235f2920b2c1630"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth = getAuth(app);
export default auth;