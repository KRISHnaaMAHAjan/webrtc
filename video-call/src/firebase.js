// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Import auth, firestore, or others here if needed

const firebaseConfig = {
  apiKey: "AIzaSyBTFLPi4j7hl7sIqnZiJvZMtG-ak3EBqCI",
  authDomain: "videocall-80e24.firebaseapp.com",
  projectId: "videocall-80e24",
  storageBucket: "videocall-80e24.appspot.com",
  messagingSenderId: "417303891262",
  appId: "1:417303891262:web:e58125bb35710fa950306f",
  measurementId: "G-FLKPYQ4RF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
