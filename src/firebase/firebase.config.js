// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjeJZc6k2vAdueLr43vJsEVpI4LdFFHCg",
  authDomain: "photo-hunters-51258.firebaseapp.com",
  projectId: "photo-hunters-51258",
  storageBucket: "photo-hunters-51258.appspot.com",
  messagingSenderId: "564570259295",
  appId: "1:564570259295:web:2d240da10660058621c0ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;