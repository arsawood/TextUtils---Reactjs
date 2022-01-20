import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBYy3E6DNqGZqoxP3FTbQPFkAd4rARoqBw",
  authDomain: "election-data-d7e74.firebaseapp.com",
  databaseURL: "https://election-data-d7e74-default-rtdb.firebaseio.com",
  projectId: "election-data-d7e74",
  storageBucket: "election-data-d7e74.appspot.com",
  messagingSenderId: "479154698852",
  appId: "1:479154698852:web:ea37208ea44a66a5bf7d71",
});

var db = firebaseApp.firestore();
export { db };
