// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZgGQoqqhZaCQLec5DDJLxbtq5dGBkFvA",
  authDomain: "dragon-news-website-64b47.firebaseapp.com",
  projectId: "dragon-news-website-64b47",
  storageBucket: "dragon-news-website-64b47.appspot.com",
  messagingSenderId: "946931071859",
  appId: "1:946931071859:web:8800f84469279fbabb6306"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;