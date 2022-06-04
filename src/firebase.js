// v9 compat packages are API compatible with v8 code
import React,{useState,useEffect} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { FacebookAuthProvider, getAuth ,onAuthStateChanged,signInWithPopup,GoogleAuthProvider,} from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyD1ynPRWWpLlFNwsFmAHz9R7xw6Ja5MDb4',
  authDomain: 'foodistaan-fa10d.firebaseapp.com',
  projectId: 'foodistaan-fa10d',
  storageBucket: 'foodistaan-fa10d.appspot.com',
  messagingSenderId: '201527710402',
  appId: '1:201527710402:web:eb1ae69603fa92d702215b',
  measurementId: 'G-QZFS2Y0LYZ',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const database = getFirestore(app);
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
//export const facebookAuthProvider = new  firebase.auth.FacebookAuthProvider();



export default app;
