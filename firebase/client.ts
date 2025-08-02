import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqDRM4DC-Uv76cPqsX9ZbqaCg8KDsJqo8",
  authDomain: "insightron-aa429.firebaseapp.com",
  projectId: "insightron-aa429",
  storageBucket: "insightron-aa429.firebasestorage.app",
  messagingSenderId: "536306338227",
  appId: "1:536306338227:web:2ae96e39d762009b75e3c6",
  measurementId: "G-YTX9VV4BMG",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);