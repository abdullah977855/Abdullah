
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeMGSz9HDgAkr0YnidRWn4N4qtb8QL6CE",
  authDomain: "first-project-59c65.firebaseapp.com",
  projectId: "first-project-59c65",
  storageBucket: "first-project-59c65.firebasestorage.app",
  messagingSenderId: "539827932953",
  appId: "1:539827932953:web:2b878c80f3796019c7bf88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get form
const form = document.getElementById("myform");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("Signup successful:", userCredential.user);
    alert(userCredential.user.email + " Your account successfully created!");

    form.reset();
    window.location.href = "./login.html"

  } catch (error) {
    console.error("Firebase error:", error.code, error.message);
    alert(error.message);
  }
});
