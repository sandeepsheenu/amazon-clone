// import firebase from "firebase";
// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyDpVnIGvY_ZPNoNjqTeBis5BDIoAw1h3e4",
//     authDomain: "clone-a3baa.firebaseapp.com",
//     projectId: "clone-a3baa",
//     storageBucket: "clone-a3baa.appspot.com",
//     messagingSenderId: "107991747673",
//     appId: "1:107991747673:web:52cd8b08d5679ce6ca7548",
//     measurementId: "G-MNWNMK4KEQ"
//     });

// export const auth = firebaseApp.auth();
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpVnIGvY_ZPNoNjqTeBis5BDIoAw1h3e4",
  authDomain: "clone-a3baa.firebaseapp.com",
  projectId: "clone-a3baa",
  storageBucket: "clone-a3baa.appspot.com",
  messagingSenderId: "107991747673",
  appId: "1:107991747673:web:52cd8b08d5679ce6ca7548",
  measurementId: "G-MNWNMK4KEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };