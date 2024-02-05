import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAA0QhT6MJUZF7DMpGzSYUVmpLziFrN7Wk",
    authDomain: "film-chicks.firebaseapp.com",
    projectId: "film-chicks",
    storageBucket: "film-chicks.appspot.com",
    messagingSenderId: "898516118386",
    appId: "1:898516118386:web:2b1c0b79e36ac3f1848beb",
    measurementId: "G-8GYHQ4B709"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default app;