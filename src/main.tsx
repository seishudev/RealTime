import { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import App from './app/App.tsx';

interface IContext {
  auth: Auth;
}

initializeApp({
  apiKey: 'AIzaSyCALdvRgBuymobDk7m2JdZUU1Z5sqnktWI',
  authDomain: 'realtimechat-a8efc.firebaseapp.com',
  projectId: 'realtimechat-a8efc',
  storageBucket: 'realtimechat-a8efc.appspot.com',
  messagingSenderId: '963907071057',
  appId: '1:963907071057:web:3d93969c0175cbd54c5c70',
  measurementId: 'G-0VYMD3SH18'
});

export const Context = createContext<IContext | null>(null);
const auth = getAuth();

createRoot(document.getElementById('root')!).render(
  <Context.Provider value={{ auth }}>
    <App />
  </Context.Provider>
);
