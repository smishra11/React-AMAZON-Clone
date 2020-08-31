import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDhOsJfCSPpV09FZ3qEhQGYgMOIXLmEgkU",
  authDomain: "clone-a444b.firebaseapp.com",
  databaseURL: "https://clone-a444b.firebaseio.com",
  projectId: "clone-a444b",
  storageBucket: "clone-a444b.appspot.com",
  messagingSenderId: "83211627544",
  appId: "1:83211627544:web:ee9fb4fa9b84d56b9d276d",
  measurementId: "G-5RD4WZGM0V",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
