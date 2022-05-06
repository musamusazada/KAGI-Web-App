import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCBlHU448AOCYbC5cbECv7QtQGNeIMtKOk",
  authDomain: "kagi-app.firebaseapp.com",
  projectId: "kagi-app",
  storageBucket: "kagi-app.appspot.com",
  messagingSenderId: "397912012583",
  appId: "1:397912012583:web:a8fe0b17e2de3a144b5b02",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
