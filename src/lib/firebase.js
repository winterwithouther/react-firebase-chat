import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-7ceca.firebaseapp.com",
  projectId: "reactchat-7ceca",
  storageBucket: "reactchat-7ceca.appspot.com",
  messagingSenderId: "1000869133060",
  appId: "1:1000869133060:web:f1913e4925095032f36e51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore()
export const storage = getStorage()