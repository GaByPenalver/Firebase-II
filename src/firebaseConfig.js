import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyADzfjXsCY9V8Nw0PNJCemt_nVkJzz6L6Y",
  authDomain: "fir-auth-f09e3.firebaseapp.com",
  projectId: "fir-auth-f09e3",
  storageBucket: "fir-auth-f09e3.firebasestorage.app",
  messagingSenderId: "1083958038516",
  appId: "1:1083958038516:web:89201f63a0b8a5277233a1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);