// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
// };

const firebaseConfig = {
    apiKey: "AIzaSyC5ODF1G71CVO_z_VPgE6Z-1nO7cWh6J3U",
    authDomain: "picman-da677.firebaseapp.com",
    projectId: "picman-da677",
    storageBucket: "picman-da677.appspot.com",
    messagingSenderId: "610422463383",
    appId: "1:610422463383:web:a0d500e99ca63edbc842d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;