import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCd8WU6w9dsE0G72WiZwI_uaE2TjWZYsVY",
  authDomain: "fir-844e1.firebaseapp.com",
  projectId: "fir-844e1",
  storageBucket: "fir-844e1.appspot.com",
  messagingSenderId: "576446717469",
  appId: "1:576446717469:web:c26b06766af02f25cdb0f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
