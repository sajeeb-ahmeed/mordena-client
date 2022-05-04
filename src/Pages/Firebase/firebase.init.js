// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD721att3d2KYFmVR640sguK3Tg0ENwi88",
    authDomain: "analyzme-furniture.firebaseapp.com",
    projectId: "analyzme-furniture",
    storageBucket: "analyzme-furniture.appspot.com",
    messagingSenderId: "519206962058",
    appId: "1:519206962058:web:04df197918e0b39aff3e73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;