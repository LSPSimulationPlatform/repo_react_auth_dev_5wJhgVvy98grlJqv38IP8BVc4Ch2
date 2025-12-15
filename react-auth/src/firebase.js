// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASWqrmvK4BvSh1bYSVqPn0WMxpoH7m8qA",
  authDomain: "test-proje-e20b2.firebaseapp.com",
  projectId: "test-proje-e20b2",
  storageBucket: "test-proje-e20b2.firebasestorage.app",
  messagingSenderId: "29109180070",
  appId: "1:29109180070:web:e22c5891fc392e51764667",
  measurementId: "G-HZ4CXPYM51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);