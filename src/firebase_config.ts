import { initializeApp } from "firebase/app"
import { getFirestore } from '@firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB1yuOEdD9cGYqc_WxrtuUzFWYBNd9-M80",
  authDomain: "project-management-app-8e972.firebaseapp.com",
  projectId: "project-management-app-8e972",
  storageBucket: "project-management-app-8e972.appspot.com",
  messagingSenderId: "389160632053",
  appId: "1:389160632053:web:53aacfa8e9315b8f990fbc"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export const db = getFirestore(app)
