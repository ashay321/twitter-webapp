// import firebase from "firebase";
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCfg3SXyOYz2gvkmZhJZN7i24Vr9GaXAHM",
    authDomain: "article-feeds-app.firebaseapp.com",
    projectId: "article-feeds-app",
    storageBucket: "article-feeds-app.appspot.com",
    messagingSenderId: "147434325839",
    appId: "1:147434325839:web:e8a75f177ebd1bc6da673a",
    measurementId: "G-TJQ8B05HPZ"
};

const firebaseApp = initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
const storage = getStorage(firebaseApp);

export { storage };