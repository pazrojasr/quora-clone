import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAeR83efWmOb__IG2hZDG5CQB8NfOWxoRI",
  authDomain: "facebook-clone-a7eaa.firebaseapp.com",
  authDomain: "facebook-clone-a7eaa.firebaseapp.com",
  projectId: "facebook-clone-a7eaa",
  databaseURL: "https://facebook-clone-a7eaa-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-a7eaa",
  storageBucket: "facebook-clone-a7eaa.appspot.com",
  messagingSenderId: "396963057366",
  appId: "1:396963057366:web:369b583d5fa9fb2ef50377",
  measurementId: "G-19ZPV0QKT0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
