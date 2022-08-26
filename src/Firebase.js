// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbwToXiW66YssPt_P_833IHrCk_gBVrMc",
  authDomain: "hospital-1cca6.firebaseapp.com",
  projectId: "hospital-1cca6",
  storageBucket: "hospital-1cca6.appspot.com",
  messagingSenderId: "399467719686",
  appId: "1:399467719686:web:ada0758bf5afbb08906787",
  measurementId: "G-MHWWXXVYEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const storage = getStorage(app);

 export const db = getFirestore(app);