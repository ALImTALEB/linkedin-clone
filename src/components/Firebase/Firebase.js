import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDsgd1vpf_PvsIvwjNWiTazTptGC8zcvps",
    authDomain: "linkedin-clone-5177c.firebaseapp.com",
    projectId: "linkedin-clone-5177c",
    storageBucket: "linkedin-clone-5177c.appspot.com",
    messagingSenderId: "155563134658",
    appId: "1:155563134658:web:42469f690aa0c9aeb0755b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  export const  db = firebaseApp.firestore()
  export const  auth = firebase.auth()

  
  