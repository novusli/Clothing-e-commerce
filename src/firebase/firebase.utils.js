import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDwF5lYJEtfeA1qQC3vuT6mYlxda0rxwZc",
    authDomain: "clothing-e-commerce-afc17.firebaseapp.com",
    databaseURL: "https://clothing-e-commerce-afc17.firebaseio.com",
    projectId: "clothing-e-commerce-afc17",
    storageBucket: "clothing-e-commerce-afc17.appspot.com",
    messagingSenderId: "662033273029",
    appId: "1:662033273029:web:11d3bc86e25abc1d57a0ac",
    measurementId: "G-B65ZPNHYQV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;