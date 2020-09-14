// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC67syukXi9yGmy-Fo1n5rkvAkapC0heTg",
    authDomain: "facebook-clone-a2742.firebaseapp.com",
    databaseURL: "https://facebook-clone-a2742.firebaseio.com",
    projectId: "facebook-clone-a2742",
    storageBucket: "facebook-clone-a2742.appspot.com",
    messagingSenderId: "514452984596",
    appId: "1:514452984596:web:cddcf9a694a74b2587e801",
    measurementId: "G-G1YWWTDT70"
  };
  const  firebaseApp=firebase.initializeApp(firebaseConfig)
  const db =firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();