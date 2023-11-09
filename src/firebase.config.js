// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAPf4XArTh6uACFlpk5xvkIjKGqqVz_o0",
  authDomain: "web3jobs-907bb.firebaseapp.com",
  databaseURL: "https://web3jobs-907bb-default-rtdb.firebaseio.com",
  projectId: "web3jobs-907bb",
  storageBucket: "web3jobs-907bb.appspot.com",
  messagingSenderId: "1040790633810",
  appId: "1:1040790633810:web:337031b10a2c2ff7ebce8b"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
