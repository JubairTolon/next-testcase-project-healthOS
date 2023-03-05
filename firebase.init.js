// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBpCS3D-kRfxMIOwDnzarToS-99itNcwbs",
    authDomain: "tesecase-healthos.firebaseapp.com",
    projectId: "tesecase-healthos",
    storageBucket: "tesecase-healthos.appspot.com",
    messagingSenderId: "184613159083",
    appId: "1:184613159083:web:fc5fb04be92dfabf6cb7ee",
    measurementId: "G-94K017LPPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export default auth;