import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeMGSz9HDgAkr0YnidRWn4N4qtb8QL6CE",
  authDomain: "first-project-59c65.firebaseapp.com",
  projectId: "first-project-59c65",
  storageBucket: "first-project-59c65.firebasestorage.app",
  messagingSenderId: "539827932953",
  appId: "1:539827932953:web:2b878c80f3796019c7bf88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logInForm = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginWithGoogle = document.getElementById("login-with-google");
logInForm.addEventListener("submit", function (e) {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      console.log(userCredential);
      email.value = "";
      password.value = "";
      alert("Sign In Successfully");
    })
    .catch((error) => {
      email.value = "";
      password.value = "";
      console.log(error);
    });
});

loginWithGoogle.addEventListener("click", () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
});
