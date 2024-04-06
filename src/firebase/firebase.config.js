// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBZgGQoqqhZaCQLec5DDJLxbtq5dGBkFvA",
//   authDomain: "dragon-news-website-64b47.firebaseapp.com",
//   projectId: "dragon-news-website-64b47",
//   storageBucket: "dragon-news-website-64b47.appspot.com",
//   messagingSenderId: "946931071859",
//   appId: "1:946931071859:web:8800f84469279fbabb6306"
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;