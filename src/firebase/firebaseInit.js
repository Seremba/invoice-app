import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB-V0GuebkTBBMfsV_1O084P-2J6ZcMjWs",
    authDomain: "invoice-app-8d005.firebaseapp.com",
    projectId: "invoice-app-8d005",
    storageBucket: "invoice-app-8d005.appspot.com",
    messagingSenderId: "1077035705628",
    appId: "1:1077035705628:web:cf4dd3909b85b23c5606d9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export default firebaseApp.firestore()