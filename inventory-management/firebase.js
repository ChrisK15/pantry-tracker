// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFireStore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDTXiR9cPnrjY6h2SRWQpPNsvJkOdtBfcE',
  authDomain: 'inventory-management-cbe44.firebaseapp.com',
  projectId: 'inventory-management-cbe44',
  storageBucket: 'inventory-management-cbe44.appspot.com',
  messagingSenderId: '97781082049',
  appId: '1:97781082049:web:e7cef2a6e86d0e4dc2b140',
  measurementId: 'G-49EX3ES200',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };
