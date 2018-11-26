import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC4pkayyzdRpO1XXA2xOz8VzN7TxFYATig",
    authDomain: "comments-devreactjs-le.firebaseapp.com",
    databaseURL: "https://comments-devreactjs-le.firebaseio.com",
    projectId: "comments-devreactjs-le",
    storageBucket: "comments-devreactjs-le.appspot.com",
    messagingSenderId: "70610481278"
  }
  firebase.initializeApp(config)

  export const database = firebase.database()
  export const auth = firebase.auth()
  