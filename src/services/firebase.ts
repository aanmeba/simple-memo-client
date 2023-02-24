import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   // appId: process.env.REACT_APP_APP_ID,
//   // databaseURL: process.env.REACT_APP_DB_URL,
//   // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   // messagingSenderId: process.env.REACT_APP_SENDER_ID,
// };

// const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

// OAuth 2.0 scopes
googleProvider.addScope("https://www.googleapis.com/auth/contacts.readonly");
githubProvider.addScope("repo");
