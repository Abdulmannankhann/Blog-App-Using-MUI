import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnRt_CMJnR62h5ABWuQJz9-7cF5MimPsY",
  authDomain: "blogapp-e0358.firebaseapp.com",
  projectId: "blogapp-e0358",
  storageBucket: "blogapp-e0358.appspot.com",
  messagingSenderId: "532405216757",
  appId: "1:532405216757:web:046178900e0643c6706cbc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
