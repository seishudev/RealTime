import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../config';
import { Navbar } from '../navbar/Navbar.tsx';
import cl from './Footer.module.scss';

export const Footer = () => {
  const [user] = useAuthState(auth);
  if (!user) return;
  return (
    <footer className={cl.section}>
      <Navbar />
    </footer>
  );
};
