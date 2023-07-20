import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3TVntKhvfIsXohmR4ylrvUq5VfQxU-oo",
  authDomain: "chat-app-a42b9.firebaseapp.com",
  projectId: "chat-app-a42b9",
  storageBucket: "chat-app-a42b9.appspot.com",
  messagingSenderId: "792508566029",
  appId: "1:792508566029:web:b56770b51b7ab2b609e344"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
