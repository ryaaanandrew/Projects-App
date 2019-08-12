import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyA9fBDa4HG45sHaHDH7r6yTljQPiJ89tC4",
    authDomain: "projects-app-e83a4.firebaseapp.com",
    databaseURL: "https://projects-app-e83a4.firebaseio.com",
    projectId: "projects-app-e83a4",
    storageBucket: "",
    messagingSenderId: "1009868823614",
    appId: "1:1009868823614:web:64f9d1b00034082a"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;