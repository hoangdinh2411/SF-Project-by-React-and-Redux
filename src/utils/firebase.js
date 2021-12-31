// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getAuth, connectAuthEmulator } from "firebase/auth"
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4XG89kSdaFR4zt_PI98IlN0x4aoNOPRU",
    authDomain: "todoappbyreactjs.firebaseapp.com",
    databaseURL: "https://todoappbyreactjs-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todoappbyreactjs",
    storageBucket: "todoappbyreactjs.appspot.com",
    messagingSenderId: "1004213403262",
    appId: "1:1004213403262:web:ac8ab6d16b2fdc2f14e22f",
    measurementId: "G-050R3XJ93V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
// const db = getFirestore(app)
const db = getFirestore()
const storage = getStorage(app)

connectAuthEmulator(auth, 'http://localhost:9099')
if (window.location.hostname === 'localhost') {
    connectFirestoreEmulator(db, 'localhost', 8080)
}


//Auth
export { db, storage, auth }

