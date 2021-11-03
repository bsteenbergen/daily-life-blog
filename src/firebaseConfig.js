import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjBxJE91PJv7jpoNWVHK7ldt1HfRHH_Vs",
    authDomain: "daily-life-blog.firebaseapp.com",
    projectId: "daily-life-blog",
    storageBucket: "daily-life-blog.appspot.com",
    messagingSenderId: "1039270233597",
    appId: "1:1039270233597:web:d592669b2546defd35c594"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);