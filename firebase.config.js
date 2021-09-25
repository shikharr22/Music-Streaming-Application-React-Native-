import firebase from "firebase/app";
import 'firebase/firestore';
var firebaseConfig = {

  apiKey: "AIzaSyDuF9l3n3Cl14dM8PnwExXwJ2kd8OmKEpk",
  authDomain: "spotify-a912f.firebaseapp.com",
  databaseURL: "https://spotify-a912f-default-rtdb.firebaseio.com",
  projectId: "spotify-a912f",
  storageBucket: "spotify-a912f.appspot.com",
  messagingSenderId: "228511116167",
  appId: "1:228511116167:web:03e8ad3dd8d05fce8b4122",
  measurementId: "G-Z07T789D0P"
};

 const firebaseApp=firebase.initializeApp(firebaseConfig);
 const db=firebase.firestore();


export default db;
