import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDMbI_Er4nI3nIcc6kUDIyGtpWQDn-Q4aM",
    authDomain: "invoice-app-b64f3.firebaseapp.com",
    projectId: "invoice-app-b64f3",
    storageBucket: "invoice-app-b64f3.appspot.com",
    messagingSenderId: "395029100161",
    appId: "1:395029100161:web:533af0b9111f3d52ebbf80"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export default firebaseApp.firestore()