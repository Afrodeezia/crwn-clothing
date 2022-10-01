// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9LCm6Aij_UX5W3fbOaz5fKqHZPXmZTv0",
  authDomain: "crwn-db-c3f21.firebaseapp.com",
  projectId: "crwn-db-c3f21",
  storageBucket: "crwn-db-c3f21.appspot.com",
  messagingSenderId: "890381182903",
  appId: "1:890381182903:web:4439947ab62943675f6a32",
  measurementId: "G-ELWXBRRY6L"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;





