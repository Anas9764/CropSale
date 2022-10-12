// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBedSIAOJ2x4YwkFTRevPIJxQhAdrGMtQI",
  authDomain: "crop-sale.firebaseapp.com",
  projectId: "crop-sale",
  storageBucket: "crop-sale.appspot.com",
  messagingSenderId: "68049387826",
  appId: "1:68049387826:web:a1288bc0c31c846dbed72b",
  measurementId: "G-PQFZG84SJV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
// const analytics = getAnalytics(app);
