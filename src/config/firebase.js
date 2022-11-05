// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCnRBfNOb1WbWLxsCrY1tGlo9Ka--92WY",
    authDomain: "avesoap-vue-shop.firebaseapp.com",
    projectId: "avesoap-vue-shop",
    storageBucket: "avesoap-vue-shop.appspot.com",
    messagingSenderId: "90882637103",
    appId: "1:90882637103:web:a7f3c16a9e46b8596db5da"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export { firebaseApp };