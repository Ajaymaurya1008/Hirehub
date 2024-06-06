// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_UujAU-aLdyhnGtmXF4dlOUapvqvB20k",
  authDomain: "hirehub-d70bb.firebaseapp.com",
  projectId: "hirehub-d70bb",
  storageBucket: "hirehub-d70bb.appspot.com",
  messagingSenderId: "758661397288",
  appId: "1:758661397288:web:1199033cf5d6ed742aae1d",
  measurementId: "G-G81ZLXZS64",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);
