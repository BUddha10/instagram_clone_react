import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAZIBhcXRAEfBdn3FME9Aq8p88eEU8UsZ0",
  authDomain: "instagram-clone-7c257.firebaseapp.com",
  databaseURL: "https://instagram-clone-7c257-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-7c257",
  storageBucket: "instagram-clone-7c257.appspot.com",
  messagingSenderId: "969580781911",
  appId: "1:969580781911:web:04714868997b6c73a41e12",
  measurementId: "G-NGEVW07VXX",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
