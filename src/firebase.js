// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWeeFRNbrOZLGDCvFzySV78gf1nCyYgJI",
  authDomain: "auth-11afe.firebaseapp.com",
  projectId: "auth-11afe",
  storageBucket: "auth-11afe.appspot.com",
  messagingSenderId: "748971122842",
  appId: "1:748971122842:web:4c93d68d61db7cdf41ff23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
