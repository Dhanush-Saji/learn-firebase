
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCYwO4Q8r6qVms-IcnyVPe9ydKk7QCb76w",
  authDomain: "learn-firebase-c0e55.firebaseapp.com",
  projectId: "learn-firebase-c0e55",
  storageBucket: "learn-firebase-c0e55.appspot.com",
  messagingSenderId: "201363174062",
  appId: "1:201363174062:web:23196319e789ed071a333f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)