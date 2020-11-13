import * as firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'


var firebaseConfig = {
    apiKey: "AIzaSyAdUfOXBX2THoavMjYW8IbSTVaoWPyeymc",
    authDomain: "olx-login-auth.firebaseapp.com",
    databaseURL: "https://olx-login-auth.firebaseio.com",
    projectId: "olx-login-auth",
    storageBucket: "olx-login-auth.appspot.com",
    messagingSenderId: "782299800424",
    appId: "1:782299800424:web:4f33df8474a874ac0e6cdd",
    measurementId: "G-8KLX3S0FZ5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;