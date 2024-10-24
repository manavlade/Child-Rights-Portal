// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3eWVSoGPObmFzjM8TH1Tn-RDmluqiVJA",
    authDomain: "child-rights-d5e56.firebaseapp.com",
    projectId: "child-rights-d5e56",
    storageBucket: "child-rights-d5e56.appspot.com",
    messagingSenderId: "1011547631435",
    appId: "1:1011547631435:web:7150368af879f6687f82ce"
};

// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.FIREBASE_AUTH_PROJECTID,
//     storageBucket: process.env.FIREBASE_AUTH_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_AUTH_MESID,
//     appId: process.env.FIREBASE_AUTH_APPID
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


export const signWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;

        console.log("User Signed in:", user);

        return user;

    } catch (error) {
        console.error("Error Signing in with Google: ", error);
    }
}