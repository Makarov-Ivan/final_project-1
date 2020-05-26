import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAQQn6PBm-YK1mj31_GOZUh0IcBjI5xFes",
  authDomain: "barber-9b962.firebaseapp.com",
  databaseURL: "https://barber-9b962.firebaseio.com",
  projectId: "barber-9b962",
  storageBucket: "barber-9b962.appspot.com",
  messagingSenderId: "972286675557",
  appId: "1:972286675557:web:28c0ebe6e644ffd19e148c",
};

firebase.initializeApp(config);
