import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

export const FIREBASE_DISABLED = true;

export const firebaseConfig = {
  apiKey: "AIzaSyAwu-A5lJpdogZnQCIvyE4lnjqKqdbeDyM",
  authDomain: "onehada-de0bc.firebaseapp.com",
  projectId: "onehada-de0bc",
  storageBucket: "onehada-de0bc.firebasestorage.app",
  messagingSenderId: "383190500924",
  appId: "1:383190500924:web:ec661b4a2f8445c5fa2539",
  measurementId: "G-HX5F481TNB",
};

export function isFirebaseConfigured() {
  if (FIREBASE_DISABLED) {
    return false;
  }

  const values = Object.values(firebaseConfig);
  if (!values.every((v) => typeof v === "string" && v.trim().length > 0)) {
    return false;
  }

  const joined = values.join(" ");
  return !joined.includes("YOUR_");
}

let app = null;
let db = null;
let storage = null;

export function getFirebaseServices() {
  if (FIREBASE_DISABLED) {
    return { app: null, db: null, storage: null };
  }

  if (!isFirebaseConfigured()) {
    return { app: null, db: null, storage: null };
  }

  if (!app) {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    storage = getStorage(app);
  }

  return { app, db, storage };
}
