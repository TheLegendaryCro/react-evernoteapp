import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyA916bb83AYZYD39NRRGlazrPjXjRQFZQ4",
  authDomain: "evernote-reactapp.firebaseapp.com",
  databaseURL: "https://evernote-reactapp.firebaseio.com",
  projectId: "evernote-reactapp",
  storageBucket: "evernote-reactapp.appspot.com",
  messagingSenderId: "350251176299",
  appId: "1:350251176299:web:f28813c9d40f52c6"
});

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
