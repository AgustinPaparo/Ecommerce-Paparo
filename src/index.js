import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh9yNS4cI3xqQ1SMoykqytOyZwZGONgjg",
  authDomain: "ecomerce-paparo.firebaseapp.com",
  projectId: "ecomerce-paparo",
  storageBucket: "ecomerce-paparo.appspot.com",
  messagingSenderId: "75760738552",
  appId: "1:75760738552:web:1c67011039944911739b0d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

