import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKGyQfTK_CeWIrCRJYr2uzQ8Ujvmm5-c8",
  authDomain: "clone-4c1be.firebaseapp.com",
  projectId: "clone-4c1be",
  storageBucket: "clone-4c1be.appspot.com",
  messagingSenderId: "501272483375",
  appId: "1:501272483375:web:bf59a07aa3c5c98d8b58da",
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()


