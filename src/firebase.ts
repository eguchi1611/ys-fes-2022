// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV_uLvFIOAcrglTI32Cm980WdIdfP-OaY",
  authDomain: "ys-fes-2022.firebaseapp.com",
  databaseURL:
    "https://ys-fes-2022-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ys-fes-2022",
  storageBucket: "ys-fes-2022.appspot.com",
  messagingSenderId: "473303044399",
  appId: "1:473303044399:web:62ce03b422b36db21a91da",
  measurementId: "G-F4BBY3XP0P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
