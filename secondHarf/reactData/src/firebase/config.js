// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4npLJmjCuxzgl0COXqQEZQlQHMGqL6l4",
    authDomain: "reactfirebase-c5388.firebaseapp.com",
    projectId: "reactfirebase-c5388",
    storageBucket: "reactfirebase-c5388.firebasestorage.app",
    messagingSenderId: "17483282442",
    appId: "1:17483282442:web:1baf87b6593dccf09447f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);