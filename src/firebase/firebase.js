// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFIDJ9IZnqT_fX7Y8qhbeDZoSk-VbUz18",
  authDomain: "asper-dashboard.firebaseapp.com",
  projectId: "asper-dashboard",
  storageBucket: "asper-dashboard.appspot.com",
  messagingSenderId: "690409555361",
  appId: "1:690409555361:web:6027847e2bad62ce8f37e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const auth = getAuth();

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
