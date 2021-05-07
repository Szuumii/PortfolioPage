import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD-tb1ANxJZPXEiJVxFQBID_gN67OTj8yc",
  authDomain: "portfolio-contact-f66a3.firebaseapp.com",
  projectId: "portfolio-contact-f66a3",
  storageBucket: "portfolio-contact-f66a3.appspot.com",
  messagingSenderId: "546984329326",
  appId: "1:546984329326:web:49a18c5e098cbcca3aa67f"
});

const db = firebaseApp.firestore();


export {db};