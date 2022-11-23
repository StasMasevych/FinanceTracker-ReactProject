import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAY7jta39NwxTZXHxpL7BXTElGI12Ll5no",
    authDomain: "mymoney-f2f5e.firebaseapp.com",
    projectId: "mymoney-f2f5e",
    storageBucket: "mymoney-f2f5e.appspot.com",
    messagingSenderId: "667161376238",
    appId: "1:667161376238:web:a4b2616c9f6e6de41acaff"
  };

  // init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp  }

