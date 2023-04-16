// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,GithubAuthProvider} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCChgaU8-SXDKuSVJe4lFVo31raTV-w11w",
  authDomain: "interview-febc8.firebaseapp.com",
  projectId: "interview-febc8",
  storageBucket: "interview-febc8.appspot.com",
  messagingSenderId: "26686800118",
  appId: "1:26686800118:web:f43b312ad6b9e405aaacd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const provider = new GoogleAuthProvider();
const Gitprovider = new GithubAuthProvider();
export {auth,provider,Gitprovider};