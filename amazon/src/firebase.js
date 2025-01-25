import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWeFnNwa_ZuLSx9KQlPpn1s4SHxVlUXG4",
  authDomain: "clone-1cd78.firebaseapp.com",
  projectId: "clone-1cd78",
  storageBucket: "clone-1cd78.firebasestorage.app",
  messagingSenderId: "319218318016",
  appId: "1:319218318016:web:a50fe2d182f59a20dd0b25",
  measurementId: "G-WWEEYN8WRJ",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
export default firebaseApp;
