import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDo_4aKPnBWVLdY_h2yJhLvkbmm2NGiaYY",
    authDomain: "otp-login-healthos.firebaseapp.com",
    projectId: "otp-login-healthos",
    storageBucket: "otp-login-healthos.appspot.com",
    messagingSenderId: "701221875077",
    appId: "1:701221875077:web:644727e580b7fe81cf68ec",
    measurementId: "G-FMTCTD4449"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;