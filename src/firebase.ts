
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD_33Bw3arsTdThSYQeMV2W-JaFePpg7Fk",
    authDomain: "react-chat-32536.firebaseapp.com",
    projectId: "react-chat-32536",
    storageBucket: "react-chat-32536.appspot.com",
    messagingSenderId: "601445847317",
    appId: "1:601445847317:web:2193dfccdcbef6a4a9991c"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


