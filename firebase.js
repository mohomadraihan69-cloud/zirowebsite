// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2QDtlK3lSuzVJKrnvUYSfjGptus2sj4M",
  authDomain: "ziro-minnu.firebaseapp.com",
  projectId: "ziro-minnu",
  storageBucket: "ziro-minnu.firebasestorage.app",
  messagingSenderId: "1028269422903",
  appId: "1:1028269422903:web:b88a59407bef62115642b2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.auth = auth;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.signOut = signOut;