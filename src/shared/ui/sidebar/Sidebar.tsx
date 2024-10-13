import { useAuthState } from 'react-firebase-hooks/auth';
import { Navbar, ThemeSwitcher } from '../';
import { auth } from '../../config';
import cl from './Sidebar.module.scss';

export const Sidebar = () => {
  const [user, loading] = useAuthState(auth);

  if (loading || !user) return null;

  return (
    <aside className={cl.container}>
      <Navbar />
      <div className={cl.wrapper}>
        <ThemeSwitcher />
      </div>
    </aside>
  );
};
