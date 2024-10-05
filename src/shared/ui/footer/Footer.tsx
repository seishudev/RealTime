import { useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../config';
import { Navbar } from '../navbar/Navbar.tsx';
import cl from './Footer.module.scss';

export const Footer = () => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);

  if (location.pathname === '/conference' || loading || !user) return null;

  return (
    <footer className={cl.section}>
      <Navbar />
    </footer>
  );
};
