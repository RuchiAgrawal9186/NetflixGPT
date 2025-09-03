// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB6O0fXLdxv7-_V1qc7eU6uR3m9Q1LuEA",
  authDomain: "netflixgpt-fad11.firebaseapp.com",
  projectId: "netflixgpt-fad11",
  storageBucket: "netflixgpt-fad11.firebasestorage.app",
  messagingSenderId: "674355601613",
  appId: "1:674355601613:web:7baeb5d06bc6d1dd0fc984",
  measurementId: "G-QHXM5KQS3F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
