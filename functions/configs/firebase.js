// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
var serviceAccount = require("./sheng-assistant-387902-firebase-adminsdk-t6xr1-4f05168ece.json");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  apiKey: "AIzaSyAruy7PZWQYZFxt1yVcUsQghxen_m-x9QU",
  authDomain: "sheng-assistant-387902.firebaseapp.com",
  projectId: "sheng-assistant-387902",
  storageBucket: "sheng-assistant-387902.appspot.com",
  messagingSenderId: "471858060877",
  appId: "1:471858060877:web:f40734e15efb8ed13e4604",
  measurementId: "G-T0876SH9B6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
