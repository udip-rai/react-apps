// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { ref, getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIpys9eSJImlxJJ4dEpR2cK-UwifbpTWI",
  authDomain: "react-apps-chatting-app.firebaseapp.com",
  databaseURL: "https://react-apps-chatting-app-default-rtdb.firebaseio.com",
  projectId: "react-apps-chatting-app",
  storageBucket: "react-apps-chatting-app.appspot.com",
  messagingSenderId: "653510353401",
  appId: "1:653510353401:web:053e1a3348bca36799dd28",
};

// Initialize Firebase
const chatting_app = initializeApp(firebaseConfig);
const chatting_app_auth = getAuth(chatting_app);
const chatting_app_db = getFirestore(chatting_app);
const chatting_app_storageRef = ref(getStorage(chatting_app));

export {
  chatting_app,
  chatting_app_auth,
  chatting_app_db,
  chatting_app_storageRef,
};
