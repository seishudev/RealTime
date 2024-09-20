import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCALdvRgBuymobDk7m2JdZUU1Z5sqnktWI',
  authDomain: 'realtimechat-a8efc.firebaseapp.com',
  projectId: 'realtimechat-a8efc',
  storageBucket: 'realtimechat-a8efc.appspot.com',
  messagingSenderId: '963907071057',
  appId: '1:963907071057:web:3d93969c0175cbd54c5c70',
  measurementId: 'G-0VYMD3SH18'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
