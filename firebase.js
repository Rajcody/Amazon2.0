// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAQvSIDJH95FblLxrDzdon_9YxR06rdnOA",
    authDomain: "amaz2-0.firebaseapp.com",
    projectId: "amaz2-0",
    storageBucket: "amaz2-0.appspot.com",
    messagingSenderId: "742931764279",
    appId: "1:742931764279:web:fa3d74b9e16f96698e5bb2",
    measurementId: "G-HENDR96XVV"
  };

  const app = !firebase.apps.length 
              ? firebase.initializeApp(firebaseConfig)
              : firebase.app();

  const db = app.firestore();

  export default db;