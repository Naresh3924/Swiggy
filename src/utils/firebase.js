// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBtzF89SHw9ydaWF3BNirItvbYpyDSkqg",
  authDomain: "swiggy-59ecb.firebaseapp.com",
  projectId: "swiggy-59ecb",
  storageBucket: "swiggy-59ecb.firebasestorage.app",
  messagingSenderId: "258378128772",
  appId: "1:258378128772:web:ed88dd4948474a021151d1",
  measurementId: "G-J6BTVF9LQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


